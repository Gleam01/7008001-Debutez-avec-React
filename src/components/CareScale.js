import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function handleCareScaleClick(e, careType, careValue) {
  e.stopPropagation();
  const alertSuffixe = careType === "light" ? "de lumière" : "d'arrosage";
  let careQuantity = "";
  if (careValue <= 1) {
    careQuantity = "beaucoup";
  } else if (careValue <= 2) {
    careQuantity = "modérement";
  } else {
    careQuantity = "peu";
  }

  alert(`Cette plante requiert ${careQuantity} ${alertSuffixe}`);
}

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span
            key={rangeElem.toString()}
            onClick={(e) => handleCareScaleClick(e, careType, scaleValue)}
          >
            {scaleType}
          </span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
