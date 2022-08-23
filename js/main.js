/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let temperatureCelcius = Number(prompt('Temperature en celcius : '));

  if (isNaN(temperatureCelcius)) {
    alert('Veuillez saisi un nombre !');
    return;
  }
  alert(`${temperatureCelcius} C° = ${temperatureCelcius * 9 / 5 + 32} F°`);
}()); // Main IIFE

