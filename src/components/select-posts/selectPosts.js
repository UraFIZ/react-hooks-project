import React from 'react'
import { useForm } from 'react-hook-form'

 const SelectPosts = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
    return (
        <div>
            <h2>Select an amount of posts to write an amazing article</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="gender" ref={register}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}
export default SelectPosts;