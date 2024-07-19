import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Icon } from "@chakra-ui/react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Code = () => {
  const codeString = `
  import SyntaxHighlighter from "react-syntax-highlighter";
  import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";

  const !pp = () {

  const codeString = "(num) = > num + 1";

  return (
  <div className= "bg">
  <Something/>
  </div>
  )
  }
  `;
  const [copy, setCopy] = useState(false);
  return (
    <div className="bg-gray-500 grid place-items-center h-screen ">
      <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
        <div className="flex justify-between px-4 text-white text-xs items-center">
          <p className="text-sm">Example code</p>
          {copy ? (
            <button className=" dark:bg-slate-800 py-1 inline-flex items-center gap-1">
              <span className="text-base mt-1">
                <Icon as={CheckIcon} />
              </span>
              <span className="">Copied!</span>
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center content-center gap-1 "
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className="text-base mt-1 h-6">
                <Icon as={CopyIcon} />
              </span>
              <span className="content-center text-center h-6">Copy</span>
            </button>
          )}
        </div>

        <SyntaxHighlighter
          language="jsx"
          style={atomOneDark}
          customStyle={{ padding: "25px" }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default Code;
