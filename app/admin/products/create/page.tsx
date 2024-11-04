import { Button } from '@/components/ui/button';
import FormInput from "@/components/form/FormInput";

import { faker } from '@faker-js/faker';


const createProductAction = async (formData: FormData) => {
  'use server';
  const name = formData.get('name') as string;
  console.log(name);
};

function CreateProductPage() {
  const name = faker.commerce.productName();

  return (
      <section>
        <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
        <div className='border p-8 rounded-md'>
          <form action={createProductAction}>
           <FormInput name={name} type='text' label="product name" defaultValue={name} />
            <Button type='submit' size='lg'>
              Submit
            </Button>
          </form>
        </div>
      </section>
  );
}
export default CreateProductPage;