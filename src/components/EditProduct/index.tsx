import Button from 'components/Button';
import CkEditor from 'components/CkEditor';
import UserNavbar from 'components/UserNavbar';
import RibbonIcon from 'icons/Ribbon';
import productImage from '../../assets/images/product.svg';
import OfferedBy from 'components/OfferedBy';
import Input from 'components/Input';

export default function EditProfile() {
  return (
    <div className="flex gap-8">
      <UserNavbar />

      <div className="flex flex-col gap-5 grow">
        <div className="flex justify-between">
          <label className="text-charcoal text-base font-semibold">Offer Title</label>

          <Button label="View Offer" />
        </div>

        <div className="rounded-md flex border border-platinum bg-white">
          <div className="relative rounded-tl-md rounded-bl-md flex flex-col w-[61%]">
            <div className="absolute top-0 start-0 rounded-tl-md rounded-br-md bg-white h-10 flex items-center gap-2.5">
              <div className="rounded-tl-md rounded-br-md bg-chinese-blue text-white flex justify-center items-center h-full w-10">
                <RibbonIcon />
              </div>

              <div className="mr-2.5 text-base font-semibold text-charcoal">Patent</div>
            </div>

            <img src={productImage} alt="Product 1" className="w-full rounded-tl-md" />

            <div className="p-5 flex flex-col gap-2.5">
              <Input name="title" placeholder="Title" />

              <CkEditor />
            </div>
          </div>

          <div className="border-l border-platinum flex flex-grow">
            <OfferedBy />
          </div>
        </div>

        <div className="p-5 rounded-md gap-5 flex flex-col border border-platinum bg-white">
          <p className="text-charcoal text-base font-semibold">Video</p>

          <div className="w-full">
            <Input name="video" placeholder="Add a youtube or vimeo link" />
          </div>
        </div>
      </div>
    </div>
  );
}
