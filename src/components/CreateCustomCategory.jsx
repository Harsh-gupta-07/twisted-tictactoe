import React, { useState, useRef } from "react";
const CreateCustomCategory = ({ visible, catList, initAddCat }) => {
  const [emoList, setEmoList] = useState([]);
  const emoInput = useRef(null);
  const catName = useRef(null);
  const [emoInputErr, setEmoInputErr] = useState(false);
  const [catInputErr, setCatInputErr] = useState(false);
  const [catExistErr, setCatExistErr] = useState(false);
  const [numOfEmoErr, setNumOfEmoErr] = useState(false);
  function addEmo() {
    const emo = emoInput.current.value.trim();
    const emojiRegex =
      /^(\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{Emoji})\p{Emoji_Modifier}*$/u;

    if (emo && [...emo].length === 1 && emojiRegex.test(emo)) {
      setEmoList([...emoList, emo]);
      setEmoInputErr(false);
    } else {
      setEmoInputErr(true);
    }
    emoInput.current.value = "";
  }

  function removeEmo(idx) {
    setEmoList(
      emoList.filter((_, ind) => {
        return ind !== idx;
      })
    );
  }

  function finalChecks() {
    const title = catName.current.value.trim();

    let hasError = false;

    if (title.length === 0 || title.length > 10) {
      setCatInputErr(true);
      hasError = true;
    } else {
      setCatInputErr(false);
    }

    const isDuplicate = catList.some(
      (val) => val.toLowerCase() === title.toLowerCase()
    );

    if (isDuplicate) {
      setCatExistErr(true);
      hasError = true;
    } else {
      setCatExistErr(false);
    }

    if (emoList.length < 3 || emoList.length > 10) {
      setNumOfEmoErr(true);
      hasError = true;
    } else {
      setNumOfEmoErr(false);
    }

    if (hasError) return;

    initAddCat({ title: title, emojiList: emoList });
    visible();
  }

  return (
    <dialog id="customCategory" className="modal modal-open" onClick={visible}>
      <div
        className="modal-box bg-white max-w-md w-full sm:w-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={visible}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Add Custom Category</h3>
        <div className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text mb-2">Category Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Category Name"
              className="input input-bordered w-full border border-gray-800 focus:outline-none bg-white"
              ref={catName}
            />
            {catInputErr && (
              <p className="text-xs text-red-600 py-1">
                Enter Category name of max length of 10.
              </p>
            )}
            {catExistErr && (
              <p className="text-xs text-red-600 py-1">
                Category with this name already exists.
              </p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2">Add emoji</span>
            </label>
            <div className="flex gap-2">
              <input
                autoFocus
                type="text"
                placeholder={
                  emoList.length === 10
                    ? "Max amount of emoji's reached"
                    : "Add Emoji then press add"
                }
                className={`${
                  emoList.length === 10 ? "placeholder:text-black" : ""
                }  disabled:cursor-not-allowed disabled:bg-[#a4a4a4] input input-bordered w-full border border-gray-800 focus:outline-none bg-white`}
                ref={emoInput}
                disabled={emoList.length === 10}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addEmo();
                }}
              />
              <button
                onClick={addEmo}
                disabled={emoList.length === 10}
                className="px-4 py-2 rounded-md bg-red-600 cursor-pointer hover:opacity-85 active:opacity-65  text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add
              </button>
            </div>
            {emoInputErr ? (
              <p className="text-xs text-red-600 py-1">
                Enter exactly one emoji
              </p>
            ) : (
              <p className="text-xs text-gray-600 py-1">
                Depending on your system some emoji may be invalid.
              </p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2">
                Added emoji's (Click to remove)
              </span>
            </label>

            {emoList.length === 0 ? (
              <div className="bg-[#f0f0f0] p-4 rounded">
                <p className="select-none text-sm text-gray-500">
                  Add atleast 3 and at max 10 Emoji's.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-6 gap-0 gap-y-1.5 place-items-center bg-[#f0f0f0] p-2 rounded">
                {emoList.map((item, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 text-xl flex items-center justify-center hover:bg-[#c9c9c9] rounded-xl cursor-pointer"
                    onClick={() => removeEmo(idx)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {numOfEmoErr && (
              <p className="text-xs text-red-600 py-1">
                Add atleast 3 and max 10 Emoji's.
              </p>
            )}
          </div>
        </div>

        <div className="modal-action">
          <button className="btn btn-neutral btn-outline" onClick={visible}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={finalChecks}>
            Create Category
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CreateCustomCategory;
