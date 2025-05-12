import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";
import { IconArrowBotton } from '../../components/icons.components';
import { useCotizarUser } from '../../hooks/useCotizar';

interface FormValues {
  nroDocument: string;
  phone: string;
  checkPrivacity: boolean;
  checkComunication: boolean;
}

export const SignupSchema = Yup.object().shape({
  nroDocument: Yup.string()
    .required('Este campo es obligatorio')
    .matches(/^[0-9]+$/, 'Solo se permiten números')
    .min(8, 'El DNI debe tener 8 dígitos')
    .max(8, 'El DNI debe tener 8 dígitos'),

  phone: Yup.string()
    .required('Este campo es obligatorio')
    .matches(/^[0-9]+$/, 'Solo se permiten números')
    .min(9, 'El celular debe tener 9 dígitos')
    .max(9, 'El celular debe tener 9 dígitos'),

  checkPrivacity: Yup.bool()
    .oneOf([true], 'Debe aceptar la Política de Privacidad'),

  checkComunication: Yup.bool()
    .oneOf([true], 'Debe aceptar las Comunicaciones Comerciales'),
});

export const CotizarForm = () => {
  const { handleSubmit, loading } = useCotizarUser();

  const initialValues: FormValues = {
    nroDocument: '',
    phone: '',
    checkPrivacity: true,
    checkComunication: true,
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={() => handleSubmit()}
    >
      {({ errors, touched }) => (
        <Form>
          {/* Campo DNI */}
          <div className='mb-4'>
            <div className='border-solid border-[1px] border-purple-2 rounded-[10px] flex items-center h-[56px]'>
              <p className='p-[.98em] w-full min-w-[80px] max-w-[120px] border-solid border-r-[1px] border-purple-42 flex items-center justify-between cursor-pointer'>
                DNI
                <IconArrowBotton />
              </p>
              <div className='flex flex-col px-[1em]'>
                <label className='text-[.75em] text-purple-2' htmlFor="nroDocument">Nro. de documento</label>
                <Field
                  id="nroDocument"
                  name="nroDocument"
                  placeholder='Ingrese su DNI'
                  className='outline-none bg-transparent'
                  type="text"
                />
              </div>
            </div>
            {errors.nroDocument && touched.nroDocument && (
              <div className='alert__error'>{errors.nroDocument}</div>
            )}
          </div>

          {/* Campo Celular */}
          <div className='mb-4'>
            <div className='border-solid border-[1px] border-purple-2 rounded-[10px] flex items-center h-[56px]'>
              <div className='flex flex-col px-3 w-full'>
                <label className='text-[.75em] text-purple-2' htmlFor="phone">Celular</label>
                <Field
                  id="phone"
                  name="phone"
                  placeholder='Ingrese su número'
                  className='outline-none bg-transparent'
                  type="text"
                />
              </div>
            </div>
            {errors.phone && touched.phone && (
              <div className='alert__error'>{errors.phone}</div>
            )}
          </div>

          {/* Checkboxes */}
          <div className="checkbox-container">
            <Field type="checkbox" id="checkPrivacity" name="checkPrivacity" />
            <label className="text-[.75em] leading-[1.5em]" htmlFor="checkPrivacity">
              Acepto la Política de Privacidad
            </label>
            {errors.checkPrivacity && touched.checkPrivacity && (
              <div className='alert__error'>{errors.checkPrivacity}</div>
            )}
          </div>
          <div className="checkbox-container">
            <Field type="checkbox" id="checkComunication" name="checkComunication" />
            <label className="text-[.75em] leading-[1.5em]" htmlFor="checkComunication">
              Acepto la Política Comunicaciones Comerciales
            </label>
            {errors.checkComunication && touched.checkComunication && (
              <div className='alert__error'>{errors.checkComunication}</div>
            )}
          </div>

          <p className='text-xs underline mb-4 font-bold cursor-pointer'>Aplican Términos y Condiciones.</p>

          <button
            type='submit'
            className={`bg-black-main rounded-[40px] text-white w-full h-[56px]
              md:w-[195px] lg:font-bold
              ${(errors.checkPrivacity && touched.checkPrivacity) || (errors.checkComunication && touched.checkComunication) || loading
              ? 'disabled opacity-75' : ''}
            `}
          >
            Cotiza aquí
          </button>
        </Form>
      )}
    </Formik>
  );
};
