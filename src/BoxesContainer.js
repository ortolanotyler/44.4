import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxes.css';
import { selectRandom } from './utility';

function ColorBoxGrid(props) {
  const [colorBoxes, updateColorBoxes] = useState(
    Array.from({ length: props.boxCount }, () => selectRandom(props.availableColors))
  );

  const handleColorChange = () => {
    let randomIndex = Math.floor(Math.random() * props.boxCount);

    updateColorBoxes(currentBoxes => {
      let newBoxes = [...currentBoxes];
      newBoxes[randomIndex] = selectRandom(props.availableColors);
      return newBoxes;
    });
  };

  const renderedBoxes = colorBoxes.map((color, index) => <ColorBox key={index} color={color} />);

  return (
    <div>
      <section className="ColorBoxGrid">{renderedBoxes}</section>
      <button onClick={handleColorChange}>Randomize Color</button>
    </div>
  );
}

ColorBoxGrid.defaultProps = {
  boxCount: 16,
  availableColors: [
    [
    "Aqua",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "Chocolate",
    "DodgerBlue",
    "Lavender",
    "LawnGreen",
    "Peru",
    "Plum",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Yellow",
    "YellowGreen"
  ]
};

export default ColorBoxGrid;
