import React from 'react';
import ServiceReviewSectionForm from '../ServiceReviewSectionForm/ServiceReviewSectionForm';
import ServiceReviewSectionReviews from '../ServiceReviewSectionReviews/ServiceReviewSectionReviews';

const ServiceReviewSection = ({ service }) => {

    return (
        <div>
            <ServiceReviewSectionForm service={service}></ServiceReviewSectionForm>
            <ServiceReviewSectionReviews service={service}></ServiceReviewSectionReviews>

        </div>
    );
};

export default ServiceReviewSection;