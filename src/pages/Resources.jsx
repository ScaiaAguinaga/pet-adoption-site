import "../styles.css";
import Dropdown from "../components/Dropdown";

const Resources = () => {
  return (
    <div className="m-auto w-1/2">
      <h1>Resources</h1>
      <div className="rounded-[20px] border-4 border-cerulean p-6 pt-3">
        <section>
          <h1>Checklist</h1>
          <div>
            <h3>item 1</h3>
            <h3>item 2</h3>
            <h3>item 3</h3>
            <h3>item 4</h3>
            <h3>item 5</h3>
          </div>
        </section>
        <section>
          <h1>Pet Tips</h1>
          <div>
            <h3>Tip 1</h3>
            <p>You should follow tip 1!</p>
            <h3>Tip 2</h3>
            <p>You should follow tip 2!</p>
            <h3>Tip 3</h3>
            <p>You should follow tip 3!</p>
          </div>
        </section>
        <section>
          <h1>FAQ</h1>
          <div>
            <Dropdown question="Question 1" answer="Answer 1" />
            <Dropdown question="Question 2" answer="Answer 2" />
            <Dropdown question="Question 3" answer="Answer 3" />
            <Dropdown question="Question 4" answer="Answer 4" />
            <Dropdown question="Question 5" answer="Answer 5" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
