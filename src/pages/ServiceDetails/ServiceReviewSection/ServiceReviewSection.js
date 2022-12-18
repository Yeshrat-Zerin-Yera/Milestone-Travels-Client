import React from 'react';
import ServiceReviewSectionForm from '../ServiceReviewSectionForm/ServiceReviewSectionForm';

const ServiceReviewSection = ({ service }) => {

    return (
        <div>
            <ServiceReviewSectionForm service={service}></ServiceReviewSectionForm>

        </div>
    );
};

export default ServiceReviewSection;