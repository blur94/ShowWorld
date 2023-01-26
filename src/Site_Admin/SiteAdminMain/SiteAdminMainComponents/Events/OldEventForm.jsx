import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const initialValues = {
  title: "",
  description: "",
  trailer: "",
  rating: "",
  pg: "",
  duration: "",
  banner: null,
  thumbnails: [],
  compID: ""
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  banner: Yup.mixed().test('fileType', 'Banner must be an image', value => value && value.type.startsWith('image/')).required('An image is required'),
  thumbnails: Yup.array().of(Yup.mixed().test('fileType', 'Thumbnails must be images', value => value && value.type.startsWith('image/')))
    .required('At least one image is required'),
});

export default function OldEventForm() {
  // Multiple files
  const [thumbnails, setThumbnails] = useState([]);
  const [thumbnailNames, setThumbnailNames] = useState([]);

  // Single file
  const [banner, setBanner] = useState(null);
  const [bannerName, setBannerName] = useState('');
console.log(banner)
console.log(bannerName)
console.table(thumbnails)
console.table(thumbnailNames)

  const onSubmit = (values, onSubmitProps) => {
    

    console.log("form data: ", { ...values, banner: banner, thumbnails: thumbnails });
    console.log('submit props:', onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    setThumbnailNames([]);
    setThumbnails([]);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Movie Title
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              className="form-control"
            />
            <ErrorMessage name="title" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <Field
              type="text"
              id="description"
              name="description"
              className="form-control"
            />
            <ErrorMessage name="description" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="trailer" className="form-label">
              Trailer URL
            </label>
            <Field
              type="text"
              id="trailer"
              name="trailer"
              className="form-control"
            />
            <ErrorMessage name="trailer" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <Field
              type="number"
              id="rating"
              name="rating"
              className="form-control"
            />
            <ErrorMessage name="rating" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="pg" className="form-label">
              PG
            </label>
            <Field
              type="text"
              id="pg"
              name="pg"
              className="form-control"
            />
            <ErrorMessage name="pg" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="duration" className="form-label">
              Duration
            </label>
            <Field
              type="text"
              id="duration"
              name="duration"
              className="form-control"
            />
            <ErrorMessage name="duration" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="banner" className="form-label">
              Banner
            </label>
            <Field
              type="file"
              id="banner"
              name="banner"
              className="form-control"
            />
            <ErrorMessage name="banner" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="thumbnails" className="form-label">
              Thumbnails
            </label>
            <Field
              type="file"
              id="thumbnails"
              name="thumbnails"
              className="form-control"
              multiple
            />
            <ErrorMessage name="thumbnails" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="compID" className="form-label">
              Company ID
            </label>
            <Field
              type="text"
              id="compID"
              name="compID"
              className="form-control"
            />
            <ErrorMessage name="compID" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting || formSubmitting}>
            {formSubmitting ? "Submitting..." : "Submit"}
          </button>
          {formError && <div>An error occurred while submitting the form.</div>}
        </Form>
      </Formik>
    </div>
  );
}
