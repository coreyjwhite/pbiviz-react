"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

/**
 * Circle Formatting Card
 */
class CircleCardSettings extends FormattingSettingsCard {
  circleColor = new formattingSettings.ColorPicker({
    name: "circleColor", // circle color name should match circle color property name in capabilities.json
    displayName: "Color",
    description: "The fill color of the circle.",
    show: true,
    value: { value: "white" },
  });

  circleThickness = new formattingSettings.NumUpDown({
    name: "circleThickness", // circle thickness name should match circle color property name in capabilities.json
    displayName: "Thickness",
    description: "The circle thickness.",
    show: true,
    value: 2,
  });

  name: string = "circle"; // circle card name should match circle object name in capabilities.json
  displayName: string = "Circle";
  show: boolean = true;
  slices: Array<FormattingSettingsSlice> = [
    this.circleColor,
    this.circleThickness,
  ];
}

/**
 * visual settings model class
 *
 */
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
  // Create formatting settings model circle formatting card
  circleCard = new CircleCardSettings();

  cards = [this.circleCard];
}
