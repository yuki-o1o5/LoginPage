import CategoryButton from "../../commonComponents/CategoryButton/CategoryButton.jsx";
import StepButton from "../../commonComponents/StepButton/StepButton.jsx";
import "./Container.css";

function Container({ category1, category2, category3, category4 }) {
  return (
    <div className="primaryContainer">
      <div className="categoryCotainer">
        <h2>Let's choose Category</h2>
        <div className="categoryButtonGroup">
          <CategoryButton category={category1} />
          <CategoryButton category={category2} />
          <CategoryButton category={category3} />
          <CategoryButton category={category4} />
        </div>
        <div className="stepButtonContainer">
          <StepButton word="Next" />
        </div>
      </div>
    </div>
  );
}

export default Container;
