import Button from 'components/Button';
import CkEditor from 'components/CkEditor';
import UserNavbar from 'components/UserNavbar';
import RibbonIcon from 'icons/Ribbon';
import OfferedBy from 'components/OfferedBy';
import Input from 'components/Input';
import { selectProduct, fetchProduct, selectLoading, updateProduct } from 'redux/slices/product';
import { fetchTrls, selectTrls } from 'redux/slices/trl';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useCallback, useEffect, useMemo } from 'react';
import SettingIcon from 'icons/Setting';
import StrategyIcon from 'icons/Strategy';
import ClockIcon from 'icons/Clock';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Product } from 'common/interfaces/product';
import MultiInputField from 'components/MultiInputField';
import Select from 'components/Select';
import RightTickIcon from 'icons/RightTick';
import { selectThemeConfig } from 'redux/slices/themeConfig';

export default function EditProfile() {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);
  const isLoadingProduct = useAppSelector(selectLoading);
  const trls = useAppSelector(selectTrls);
  const themeConfig = useAppSelector(selectThemeConfig);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
    getValues,
  } = useForm<Product>({
    defaultValues: {
      name: product.name,
      video: product.video,
      description: product.description,
      businessModels: product.businessModels,
    },
  });

  const {
    fields: businessModelsFields,
    remove: removeBusinessModelField,
    append: appendBusinessModelField,
  } = useFieldArray({
    control,
    name: 'businessModels',
  });

  const {
    fields: categoryFields,
    remove: removeCategoryField,
    append: appendCategoryField,
  } = useFieldArray({
    control,
    name: 'categories',
  });

  const handleUpdateProduct = (data: Product) => {
    dispatch(updateProduct(data));
  };

  const resetProductForm = useCallback(() => {
    reset(product);
  }, [reset, product]);

  useEffect(() => {
    dispatch(fetchTrls());
    dispatch(fetchProduct());
  }, []);

  useEffect(() => {
    if (!isLoadingProduct) {
      resetProductForm();
    }
  }, [isLoadingProduct]);

  const renderActionButtons = useMemo(
    () => (
      <div className="flex justify-end gap-2.5 mt-1.5">
        <Button label="Cancel" variant="text" onClick={resetProductForm} />
        <Button label="Save" type="submit" icon={<RightTickIcon />} />
      </div>
    ),
    [resetProductForm],
  );

  return (
    <div className="flex gap-8 ">
      <UserNavbar />

      <form onSubmit={handleSubmit(handleUpdateProduct)} className="w-full">
        <div className="flex flex-col gap-5 flex-grow">
          <div className="flex justify-between">
            <label className="text-charcoal text-base font-semibold">Offer Title</label>

            <Button label="View Offer" />
          </div>

          <div className="rounded-md flex border border-platinum bg-white max-lg:flex-col">
            <div
              className={`relative rounded-tl-md rounded-bl-md flex flex-col max-lg:w-full ${
                themeConfig.hasUserSection ? ' w-[61%]' : 'w-full'
              }`}
            >
              <div className="absolute top-0 start-0 rounded-tl-md rounded-br-md bg-white h-10 flex items-center gap-2.5">
                <div className="rounded-tl-md rounded-br-md bg-chinese-blue text-white flex justify-center items-center h-full w-10">
                  <RibbonIcon />
                </div>

                <div className="mr-2.5 text-base font-semibold text-charcoal">Patent</div>
              </div>

              <img
                src={product.picture}
                alt="Product 1"
                className="w-full rounded-tl-md max-h-[300px] max-md:h-[180px]"
              />

              <div className="p-5 flex flex-col gap-2.5 max-md:px-2.5">
                <Input placeholder="Product Name" name="name" register={register} error={!!errors.name} required />

                <Controller
                  control={control}
                  name="description"
                  rules={{ required: true }}
                  render={({ field: { onChange, value }, fieldState: { invalid } }) => (
                    <CkEditor data={value} onChange={data => onChange(data)} error={invalid} />
                  )}
                />

                {renderActionButtons}
              </div>
            </div>

            <OfferedBy address={product.company.address} user={product.user} companyName={product.company.name} />
          </div>

          <div className="p-5 rounded-md gap-5 flex flex-col border border-platinum bg-white max-md:px-2.5">
            <p className="text-charcoal text-base font-semibold">Video</p>

            <div className="w-full">
              <Input
                placeholder="Add a youtube or vimeo link"
                register={register}
                name="video"
                required
                error={!!errors.video}
              />
            </div>

            {renderActionButtons}
          </div>

          <div className="p-5 rounded-md gap-5 flex flex-col border border-platinum bg-white max-md:px-2.5">
            <p className="text-charcoal text-base font-semibold">Offer details</p>

            <div className="flex gap-2 text-cadet-grey items-start flex-grow mb-5">
              <ClockIcon />

              <div className="flex flex-col gap-2.5 w-[100%] max-md:w-[90%]">
                <p className="text-base text-auro-metal-saurus">TRL</p>

                <Select options={trls} value={getValues('trl')} onChange={trlValue => setValue('trl', trlValue)} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-10">
              <MultiInputField
                fields={categoryFields}
                icon={<SettingIcon />}
                label="Categories"
                name="categories"
                register={register}
                onAddField={() => appendCategoryField({ id: businessModelsFields.length + 1, name: '' })}
                onRemoveField={index => removeCategoryField(index)}
                errors={errors.categories}
              />

              <MultiInputField
                fields={businessModelsFields}
                icon={<StrategyIcon />}
                label="Business Model"
                name="businessModels"
                register={register}
                onAddField={() => appendBusinessModelField({ id: businessModelsFields.length + 1, name: '' })}
                onRemoveField={index => removeBusinessModelField(index)}
                errors={errors.businessModels}
              />

              {renderActionButtons}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
