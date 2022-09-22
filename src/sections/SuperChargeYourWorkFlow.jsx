import React from "react";

// svg icons/images
import { ReactComponent as ListIcon } from "../assets/images/list.svg";
import { ReactComponent as TextSnippetIcon } from "../assets/images/text-snippets.svg";
import { ReactComponent as EyeIcon } from "../assets/images/eye.svg";

import { ReactComponent as GoogleIcon } from "../assets/images/google.svg";
import { ReactComponent as IBMIcon } from "../assets/images/ibm.svg";
import { ReactComponent as MicrosoftIcon } from "../assets/images/microsoft.svg";
import { ReactComponent as HewlettPackardEnterpriseIcon } from "../assets/images/hewlett-packard-enterprise.svg";
import { ReactComponent as VectorGraphicIcon } from "../assets/images/vector-graphics.svg";

const SuperChargeYourWorkFlow = () => {
  return (
    <section className="px-8 mt-[41px]">
      <h2 className="mb-[11px]">Supercharge your workflow</h2>
      <p className="text-center">
        We’ve got the tools to boost your productivity.
      </p>
      <div className="mt-[90px] flex flex-col gap-[56px]">
        <div className="">
          <ListIcon className="block mx-auto w-[44px]" />
          <h3 className="mt-[40px] text-center">Create blacklists</h3>
          <p className="text-center mt-[18px]">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className="">
          <TextSnippetIcon className="block mx-auto w-[34px]" />
          <h3 className="mt-[44px] text-center">Plain text snippets</h3>
          <p className="text-center mt-[18px]">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="">
          <EyeIcon className="block mx-auto w-[49px]" />
          <h3 className="mt-[44px] text-center">Sneak preview</h3>
          <p className="text-center mt-[18px]">
            Quick preview of all snippets on your Clipboard for easy access.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[131px] gap-[57px]">
        <GoogleIcon className="" />
        <IBMIcon className="" />
        <MicrosoftIcon className="" />
        <HewlettPackardEnterpriseIcon className="" />
        <VectorGraphicIcon className="" />
      </div>
    </section>
  );
};

export default SuperChargeYourWorkFlow;
