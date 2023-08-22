import OfferedBy from 'components/OfferedBy';
import productImage from '../../assets/images/product.svg';
import RibbonIcon from 'icons/Ribbon';

export default function ProductMainSection() {
  return (
    <div className="rounded-md gap-5 flex border border-platinum bg-white">
      <div className="relative rounded-tl-md rounded-bl-md flex flex-col w-[61%]">
        <div className="absolute top-0 start-0 rounded-tl-md rounded-br-md bg-white h-10 flex items-center gap-2.5">
          <div className="rounded-tl-md rounded-br-md bg-chinese-blue text-white flex justify-center items-center h-full w-10">
            <RibbonIcon />
          </div>

          <div className="mr-2.5 text-base font-semibold text-charcoal">Patent</div>
        </div>

        <img src={productImage} alt="Product 1" className="w-full rounded-tl-md" />

        <div className="p-5">
          <p className="text-charcoal font-semibold text-base">Intelligent Finite Elements in Structural mechanics</p>
          <p className="text-auro-metal-saurus text-sm mt-2.5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <OfferedBy />
    </div>
  );
}
