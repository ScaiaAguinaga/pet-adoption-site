import "../styles.css";
import { ChevronDown} from "react-feather";

const Resources = () => {
  return (
    <div className="m-auto w-1/2">
      <h1 className=" my-8 flex justify-center">Resources</h1>
      <div className="rounded-[20px] border-4 border-cerulean p-6">
        <section className="mb-6">
          <h1>Checklist</h1>
          <div className="ml-4">
            <h3 className="hover:text-orange-500">item 1</h3>
            <h3>item 2</h3>
            <h3>item 3</h3>
            <h3>item 4</h3>
            <h3>item 5</h3>
          </div>
        </section>
        <section className="mb-6">
          <h1>Pet Tips</h1>
          <div className="ml-4">
            <h3>Tip 1</h3>
            <p>tip 1 cont.</p>
            <h3>Tip 2</h3>
            <p>tip 2 cont.</p>
            <h3>Tip 3</h3>
            <p>tip 3 cont.</p>
          </div>
        </section>
        <section>
          <h1>FAQ</h1>
          <div className="ml-4">
            <h3>Question 1 <ChevronDown/></h3>
            <p>Question 1 Answer</p>
            <h3>Question 2</h3>
            <p>Question 2 Answer</p>
            <h3>Question 3</h3>
            <p>Question 3 Answer</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
