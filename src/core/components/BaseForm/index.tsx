import React from 'react';
import './styles.scss';

type Props = {
    title: string;
    children: React.ReactNode;
}

const BaseForm = ({ title, children }: Props) => {

    return (
        <div className="admin-base-form card-base">
            <h1 className="base-form-title">
                {title}
            </h1>
            {children}
            <div className="base-form-actions">
                <button className="btn btn-primary border-radius-10">
                    Encontrar
                </button>
            </div>
        </div>
    );
};

export default BaseForm;