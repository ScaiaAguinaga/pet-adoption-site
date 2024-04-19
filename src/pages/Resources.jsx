import "../styles.css";
import ChecklistItem from "../components/ChecklistItem";
import Dropdown from "../components/Dropdown";

const Resources = () => {
  return (
    <div className="m-auto w-1/2">
      <h1 className="flex justify-center py-5">Resources</h1>

      <div className="grid max-w-min grid-flow-col grid-rows-1 gap-3 pl-1">
        <button>
          <h2 className="flex justify-center rounded-t-[20px] border-b-transparent bg-cerulean px-6 text-offwhite ring-4 ring-cerulean">
            Dog
          </h2>
        </button>
        <button>
          <h2 className="flex justify-center rounded-t-[20px] border-b-transparent px-6 ring-4 ring-cerulean hover:text-cerulean">
            Cat
          </h2>
        </button>
        <button>
          <h2 className="flex justify-center rounded-t-[20px] border-b-transparent px-6 ring-4 ring-cerulean">
            Other
          </h2>
        </button>
      </div>

      <div className="rounded-b-[20px] rounded-r-[20px] border-4 border-cerulean p-6 pt-3">
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
          <h1 className="pb-3 font-medium">FAQ</h1>
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
