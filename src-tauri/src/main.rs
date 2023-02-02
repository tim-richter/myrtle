
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri_plugin_store::PluginBuilder;
use tauri::SystemTray;
use tauri::{CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem};
use tauri::{Manager, SystemTrayEvent};

fn main() {
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let show = CustomMenuItem::new("show".to_string(), "Open Myrtle");

  let tray_menu = SystemTrayMenu::new()
  .add_item(show)
  .add_native_item(SystemTrayMenuItem::Separator)
  .add_item(quit);

  let tray = SystemTray::new().with_menu(tray_menu);

  tauri::Builder::default()
  .plugin(PluginBuilder::default().build())
  .system_tray(tray)
  .on_window_event(|event| match event.event() {
      tauri::WindowEvent::CloseRequested { api, .. } => {
          event.window().hide().unwrap();
          api.prevent_close();
      }
      _ => {}
  })
  .on_system_tray_event(|app, event| match event {
    SystemTrayEvent::LeftClick {
      position: _,
      size: _,
      ..
    } => {
      println!("system tray received a left click");
      let window = app.get_window("main").unwrap();
      window.unminimize().unwrap()
    }
    SystemTrayEvent::RightClick {
      position: _,
      size: _,
      ..
    } => {
      println!("system tray received a right click");
    }
    SystemTrayEvent::DoubleClick {
      position: _,
      size: _,
      ..
    } => {
      println!("system tray received a double click");
      let window = app.get_window("main").unwrap();
      window.maximize().unwrap();
    }
    SystemTrayEvent::MenuItemClick { id, .. } => {
      match id.as_str() {
        "quit" => {
          std::process::exit(0);
        }
        "show" => {
          let window = app.get_window("main").unwrap();
          window.show().unwrap();
        }
        _ => {}
      }
    }
    _ => {}
  })
  .run(tauri::generate_context!())
  .expect("error while running tauri application");
}
