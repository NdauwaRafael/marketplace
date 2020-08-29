import React from 'react';
import TextInput from '../../common/form/Input';
import Textarea from '../../common/form/Textarea';

export default ({ record: {name, quantity, price, description }, auth: { user }, onSave, onChange, errors }) =>
    <form onSubmit={onSave}>
        <TextInput
            type='text'
            name='name'
            label="Name"
            value={name}
            error={errors.name}
            onChange={onChange} />
        <TextInput
            type='number'
            name='quantity'
            label="Quantity"
            value={quantity}
            error={errors.quantity}
            onChange={onChange} />
        <TextInput
            type='number'
            name='price'
            label="Price"
            value={price}
            error={errors.price}
            onChange={onChange} />
        <Textarea
            rows="3"
            name='description'
            label="Description "
            value={description}
            error={errors.description}
            onChange={onChange} />
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
