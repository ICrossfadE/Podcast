import replace from "gulp-replace"; // Пошук та заміна
import gulpPlumber from "gulp-plumber"; // Обробка помилок
import notify from "gulp-notify"; // Сповіщення(помилки)
import browserSync from "browser-sync"; // Локальний сервер
import newer from "gulp-newer"; // Провірка оновлень
import ifPlugin from "gulp-if";

export const plugins = {
  replace: replace,
  plumber: gulpPlumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin,
};
