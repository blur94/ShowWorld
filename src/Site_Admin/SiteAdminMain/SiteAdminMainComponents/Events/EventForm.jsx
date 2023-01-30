import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "../../../../templates/Gilead/Firebase";
// '/src/templates/Gilead/Firebase.js'
import { v4 } from "uuid";

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
    title: Yup.string()
        .required('Title is required')
        .min(3, 'Title must be at least 3 characters long'),
    description: Yup.string()
        .required('Description is required')
        .min(10, 'Description must be at least 10 characters long'),
    trailer: Yup.string()
        .required('Trailer is required')
        .url('Invalid URL'),
    rating: Yup.number()
        .required('Rating is required')
        .min(1, 'Rating must be at least 1')
        .max(10, 'Rating must be at most 10'),
    pg: Yup.string()
        .required('PG is required')
        .min(3, 'PG must be at least 3 characters long'),
    duration: Yup.string()
        .required('Duration is required')
        .min(3, 'Duration must be at least 3 characters long'),
    // banner: Yup.mixed()
    //     .test('fileFormat', 'Banner must be an image', value => value && value.type.startsWith('image/'))
    //     .required('An image is required'),
    thumbnails: Yup.array()
        .of(Yup.mixed().test('fileType', 'thumbnails must be images', value => value && value.type.startsWith('image/')))
        .required('At least one thumbnail is required'),
    compID: Yup.string()
        .required('Company ID is required')
        .min(3, 'Company ID must be at least 3 characters long'),
});

export default function EventForm() {
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [formError, setFormError] = useState(false);
    const [thumbnails, setThumbnails] = useState([]);
    const [banner, setBanner] = useState(null);
    const [thumbnailsUrl, setThumbnailsUrl] = useState([]);
    const [bannerUrl, setBannerUrl] = useState(null);

    // const handleThumbnailsChange = (event) => {
    //     setThumbnails(Array.from(event.target.files));
    //     console.log('inside onchange: ', thumbnails)
    // };
    const handleThumbnailsChange = (event) => {
        if (event.target.files.length) {
            const files = Array.from(event.target.files);
            setThumbnails(files);
            console.log(files);
        } else {
            console.log('No thumbnails');
        }
    };

    const handleBannerChange = (event) => {
        setBanner(event.target.files[0]);
    };

    const uploadThumbnails = async () => {
        const newThumbnails = thumbnails;
        console.log('here in uploadthumbnails');
        console.log('inside upload func: ', newThumbnails);
        if (!newThumbnails || newThumbnails.length === 0) return [];
        // if (!Array.isArray(thumbnails)) return;

        const promises = newThumbnails.map(async (thumbnail, index) => {
            const thumbnailRef = ref(storage, `showworld/thumbnails/${thumbnail.name + v4()}`);
            const snapshot = await uploadBytes(thumbnailRef, thumbnail);
            return await getDownloadURL(snapshot.ref);
        });

        const urls = await Promise.all(promises);
        setThumbnailsUrl(urls);
        return urls;
    };

    const uploadBanner = async () => {
        if (!banner) return;
        const bannerRef = ref(storage, `showworld/banner/${banner.name + v4()}`);
        const snapshot = await uploadBytes(bannerRef, banner);
        const url = await getDownloadURL(snapshot.ref);
        setBannerUrl(url);
        return url;
    };

    const handleSubmit = async (values, { resetForm, setSubmitting }) => {
        setFormSubmitting(true);
        setTimeout(async () => {
            const bannerUrl = await uploadBanner();
            const thumbnailsUrls = await uploadThumbnails();

            const result = { ...values, banner: bannerUrl, thumbnails: thumbnailsUrls };
            console.log('here before math.random()');
            // if (Math.random() < 0.5) {
            console.log(result);
            alert(JSON.stringify(result, null, 2));
            setFormError(false);
            resetForm(initialValues);
            setFormSubmitting(false);
            // } else {
            //     setFormError(true);
            //     setFormSubmitting(false);
            // }
            setSubmitting(false);
        }, 2000);
    };


    // async function handleThumbnailsUpload(files) {
    //     const formData = new FormData();
    //     files.forEach((file, i) => {
    //         formData.append(`file${i}`, file);
    //     });
    //     formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

    //     try {
    //         const res = await axios.post('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', formData);
    //         const thumbnails = res.data.map(image => image.url);
    //         setValues(values => ({
    //             ...values,
    //             thumbnails
    //         }));
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    // async function handleBannerUpload(file) {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

    //     try {
    //         const res = await axios.post('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', formData);
    //         setBannerUrl(res.data.url);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }



    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
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
                            <input
                                type="file"
                                id="banner"
                                name="banner"
                                className="form-control"
                                accept="image/*"
                                onChange={handleBannerChange}
                            />
                            <ErrorMessage name="banner" component="div" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="thumbnails" className="form-label">
                                thumbnails
                            </label>
                            <input
                                type="file"
                                id="thumbnails"
                                name="thumbnails"
                                className="form-control"
                                multiple
                                onChange={handleThumbnailsChange}
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
                )}
            </Formik>
        </div>
    );
};

