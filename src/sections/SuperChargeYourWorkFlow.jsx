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
    <section className="px-8 mt-[41px] lg:mt-[71px]">
      <h2 className="mb-[11px] lg:mb-[19px]">Supercharge your workflow</h2>
      <p className="text-center">
        We’ve got the tools to boost your productivity.
      </p>
      <div className="mt-[90px] flex flex-col gap-[56px] max-w-[330px] mx-auto lg:flex-row lg:max-w-none xl:max-w-[1110px] xl:mt-[72px] xl:gap-[30px]">
        <div className="flex-1 xl:flex-[0_0_350px]">
          <ListIcon className="block mx-auto w-[44px]" />
          <h3 className="mt-[40px] text-center">Create blacklists</h3>
          <p className="text-center mt-[18px] xl:[letter-spacing:0.12px] xl:text-base xl:[line-height:30px] xl:mt-4">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className="flex-1 xl:flex-[0px_0px_350px]">
          <TextSnippetIcon className="block mx-auto w-[34px] lg:mt-1 xl:w-[36px] xl:mt-1" />
          <h3 className="mt-[44px] text-center">Plain text snippets</h3>
          <p className="text-center mt-[18px] xl:[letter-spacing:0.12px] xl:text-base xl:[line-height:30px] xl:mt-4">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="flex-1 xl:flex-[0px_0px_350px]">
          <EyeIcon className="block mx-auto w-[49px] xl:mt-1" />
          <h3 className="mt-[44px] text-center">Sneak preview</h3>
          <p className="text-center mt-[18px] xl:[letter-spacing:0.12px] xl:text-base xl:[line-height:30px] xl:mt-4">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[131px] gap-[57px] lg:flex-row lg:justify-center xl:mt-[150px] xl:gap-[95px] xl:w-[1110px] xl:mx-auto xl:justify-start">
        <GoogleIcon className="w-[139px] xl:w-[165px]" />
        <IBMIcon className="w-[121px] xl:w-[144px]" />
        <MicrosoftIcon className="w-[135px] xl:w-[160px]" />
        <HewlettPackardEnterpriseIcon className="w-[113px] xl:w-[134px]" />
        <VectorGraphicIcon className="w-[105px] xl:w-[125px]" />
      </div>
    </section>
  );
};

export default SuperChargeYourWorkFlow;
