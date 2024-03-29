import ReactDOM from "react-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "./Button";
import FormInput from "./FormInput";
import PriorityList from "./PriorityList";

const CreateTaskModal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm grid grid-rows-12 grid-cols-12">
      <div className=" sm:row-start-3 sm:row-end-10  sm:col-start-5 sm:col-end-9 row-start-2 row-end-10 col-start-4  col-end-11   bg-white grid grid-rows-12">
        {/* header start */}
        <div className="grid grid-cols-3 items-center row-span-2 bg-white py-2 px-4 ">
          <p className="col-span-2 font-bold uppercase">create a task</p>
          <p className="col-span-1 justify-self-end  hover:text-red-500 cursor-pointer">
            <IoMdCloseCircleOutline size={30} onClick={closeModal} />
          </p>
        </div>
        {/* header end */}
        {/* input fields start */}
        <div
          style={{
            backgroundImage: `linear-gradient(to right bottom, #ffcaf9, #f1c4fa, #e1bffb, #d0bafb, #bcb6fb)`,
          }}
          className="row-span-8 px-2 grid"
        >
          <form>
            <FormInput label="name" />
            <FormInput label="description" />
            <FormInput label="team" />
            <FormInput label="Assignees" />
            <div className="grid grid-cols-2 sm:grid-cols-12 sm:mt-4 mt-2">
              <PriorityList className="sm:col-span-2 sm:col-start-4" />
            </div>
          </form>
        </div>
        {/* input fields end */}
        {/* footer start */}
        <div className=" bg-white row-span-2 grid place-items-center">
          <Button className="col-span-1 p-2 ml-2  text-white bg-blue-900 rounded-md font-bold text-md hover:bg-slate-300 hover:text-blue-900 hover:duration-200">
            Submit
          </Button>
        </div>
        {/* footer end */}
      </div>
    </div>,
    document.querySelector(".modal")
  );
};

export default CreateTaskModal;
