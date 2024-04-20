const paragraph = $("#paragraph");

$(function () {
  $(
    "#fontSize, #forFontStyle, #fontWeight, #fontColor, #myCheckbox , #fontStyle, #fontVariant, #textDecoration, #columnCount, #lineHeight,  #textTransform, #letterSpacing, #wordSpacing, #textAlign"
  ).on("input", function () {
    updateStyle();
  });
});

updateStyle();

function updateStyle() {
  let fontFamily = $("#forFontStyle").val();
  paragraph.css("font-family", fontFamily);

  let fontSize = $("#fontSize").val() + "px";
  paragraph.css("font-size", fontSize);

  let fontWeight = $("#fontWeight").val();
  paragraph.css("font-weight", fontWeight);

  let fontColor = $("#fontColor").val();
  let colorValue = $("#colorValue");
  colorValue.val(fontColor);
  paragraph.css("color", fontColor);
  const checkbox = $("#myCheckbox");
  if (checkbox.is(":checked")) {
    let rgbColor = paragraph.css("color");
    fontColor = rgbColor;
  }

  let fontStyle = $("#fontStyle").val();
  paragraph.css("font-style", fontStyle);

  let fontVariant = $("#fontVariant").val();
  paragraph.css("font-variant", fontVariant);

  let textDecoration = $("#textDecoration").val();
  paragraph.css("text-decoration", textDecoration);

  let columnCount = $("#columnCount").val();
  paragraph.css("column-count", columnCount);

  let lineHeight = $("#lineHeight").val() + "px";
  paragraph.css("line-height", lineHeight);

  let textTransform = $("#textTransform").val();
  paragraph.css("text-transform", textTransform);

  let letterSpacing = $("#letterSpacing").val() + "px";
  paragraph.css("letter-spacing", letterSpacing);

  let wordSpacing = $("#wordSpacing").val() + "px";
  paragraph.css("word-spacing", wordSpacing);

  let textAlign = $("#textAlign").val();
  paragraph.css("text-align", textAlign);

  const codeCopy = $("#codeCopy");
  let getCode =
    "#demo \n\t\t\t\t\t\t\t{ \n\t\t\t\t\t\t\t font-family: " +
    fontFamily +
    "; \n " +
    " \t\t\t\t\t\t\t font-size: " +
    fontSize +
    ";" +
    "\n" +
    "  \t\t\t\t\t\t\t font-weight: " +
    fontWeight +
    ";" +
    "\n" +
    "  \t\t\t\t\t\t\t color: " +
    fontColor +
    ";\n" +
    " \t\t\t\t\t\t\t font-style: " +
    fontStyle +
    ";\n" +
    "  \t\t\t\t\t\t\t font-letiant: " +
    fontVariant +
    ";\n" +
    " \t\t\t\t\t\t\t text-decoration: " +
    textDecoration +
    ";\n" +
    "  \t\t\t\t\t\t\t column-count: " +
    columnCount +
    ";\n" +
    "  \t\t\t\t\t\t\t line-height: " +
    lineHeight +
    ";\n" +
    "  \t\t\t\t\t\t\t text-transform: " +
    textTransform +
    ";\n" +
    "  \t\t\t\t\t\t\t letter-spacing: " +
    letterSpacing +
    ";\n" +
    "  \t\t\t\t\t\t\t word-spacing: " +
    wordSpacing +
    ";\n" +
    "  \t\t\t\t\t\t\t text-align: " +
    textAlign +
    ";\n" +
    "\t\t\t\t\t\t\t}";

  codeCopy.text(getCode);

  Prism.highlightElement(codeCopy[0]);
}
