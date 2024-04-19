import "../styles.css";
import ChecklistItem from "../components/ChecklistItem";
import Dropdown from "../components/Dropdown";

const Resources = () => {
  return (
    <div className="m-auto w-1/2">
      <h1>Resources</h1>
      <div className="rounded-[20px] border-4 border-cerulean p-6 pt-3">
        <section className="mb-5">
          <h1 className="font-medium">Checklist</h1>
          <div>
            <ChecklistItem itemName="To-Do 1" />
            <ChecklistItem itemName="To-Do 2" />
            <ChecklistItem itemName="To-Do 3" />
            <ChecklistItem itemName="To-Do 4" />
            <ChecklistItem itemName="To-Do 5" />
          </div>
        </section>
        <section className="mb-5">
          <h1 className="font-medium">Pet Tips</h1>
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
          <h1 className="font-medium">FAQ</h1>
          <div className="grid grid-cols-1 gap-3">
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
