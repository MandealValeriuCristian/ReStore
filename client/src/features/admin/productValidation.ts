import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string().required('Product Name is a required field'),
    brand: yup.string().required('Brand is a required field'),
    type: yup.string().required('Type is a required field'),
    price: yup.number().required('Price must be a number').moreThan(100),
    quantityInStock: yup.number().required('Quantity in Stock must be a number').min(0),
    description: yup.string().required('Description is a required field'),
    file: yup.mixed().when('pictureUrl', {
        is: (value: string) => !value,
        then: schema => schema.required('Please provide an image')
    })
})