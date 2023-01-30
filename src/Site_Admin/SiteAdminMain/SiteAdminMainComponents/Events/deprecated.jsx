
    const bannerListRef = ref(storage, "showworld/banner");
    const uploadBanner = async () => {
        if (banner == null) return;
        const bannerRef = ref(storage, `showworld/banner/${banner.name + _ + v4()}`);
        uploadBytes(bannerRef, banner).then((snapshot) => {
             getDownloadURL(snapshot.ref).then((url) => {
                setBannerUrl(url);
                console.log(url);
            });
        });
    };
    const uploadThumbnail = () => {
        if (thumbnails == null) return;
        const thumbnailsRef = ref(storage, `showworld/thumbnails/${thumbnails.name + v4()}`);
        uploadBytes(thumbnailsRef, thumbnails).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setThumbnailsUrl(url);
                console.log(url);
            });
        });
    };

    const handleSubmit = async (values, { resetForm, setSubmitting }) => {
        setFormSubmitting(true);
        setTimeout(async () => {
            // Simulated API call
            if (Math.random() < 0.5) {
                await uploadBanner();
                await uploadThumbnail();
                console.log({ ...values, banner: bannerUrl, thumbnails: thumbnailsUrl });
                alert(JSON.stringify({ ...values, banner: bannerUrl, thumbnails: thumbnailsUrl }, null, 2));
                setFormError(false);
                resetForm(initialValues);
                setFormSubmitting(false);
            } else {
                setFormError(true);
                setFormSubmitting(false);
            }
            setSubmitting(false);
        }, 2000);
    };