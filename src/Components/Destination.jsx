import { useForm } from 'react-hook-form';
import frame from '../assets/img/icons/Frame.svg'
import vector from '../assets/img/icons/Vector (1).svg'
import vector3 from '../assets/img/icons/Vector (3).svg'
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../assets/redux/counter/actions';
import { useState } from 'react';

const Destination = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const dispatch = useDispatch();

    const onSubmit = (data) => {

        if (!isButtonDisabled) {
            dispatch(setData(data))
            reset();
        } else {
            // Show an alert if the button is disabled
            alert.window("Cannot add more data. Limit reached!");
        }


        console.log(data);

    }
    const data = useSelector((state) => state.formData);
    return (

        <section>
            {/* <!-- Input Data --> */}
            <div className="mt-[160px] mx-4 md:mt-[160px] relative">
                <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                    <form className="first-hero lws-inputform" onSubmit={handleSubmit(onSubmit)}>
                        {/* <!-- From --> */}
                        <div className="des-from">
                            <p>Destination From</p>
                            <div className="flex flex-row">
                                <img src={frame} alt="" />
                                <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required
                                    {...register("from")}>
                                    <option value="" hidden>Please Select</option>
                                    <option>Dhaka</option>
                                    <option>Sylhet</option>
                                    <option>Saidpur</option>
                                    <option>Cox's Bazar</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- To --> */}
                        <div className="des-from">
                            <p>Destination To</p>
                            <div className="flex flex-row">
                                <img src={frame} alt="" />
                                <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required  {...register("to")}>
                                    <option value="" hidden>Please Select</option>
                                    <option>Dhaka</option>
                                    <option>Sylhet</option>
                                    <option>Saidpur</option>
                                    <option>Cox's Bazar</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Date --> */}
                        <div className="des-from">
                            <p>Journey Date</p>
                            <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required  {...register("date")} />
                        </div>

                        {/* <!-- Guests --> */}
                        <div className="des-from">
                            <p>Guests</p>
                            <div className="flex flex-row">
                                <img src={vector} alt="" />
                                <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required  {...register("guests")}>
                                    <option value="" hidden>Please Select</option>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Persons</option>
                                    <option value="3">3 Persons</option>
                                    <option value="4">4 Persons</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Class --> */}
                        <div className="des-from !border-r-0">
                            <p>Class</p>
                            <div className="flex flex-row">
                                <img src={vector3} alt="" />
                                <select className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required {...register("class")}>
                                    <option value="" hidden>Please Select</option>
                                    <option>Business</option>
                                    <option>Economy</option>
                                </select>
                            </div>
                        </div>

                        <button className="addCity" type="submit" id="lws-addCity" disabled={isButtonDisabled || data.length >= 3}
                            onClick={() => setIsButtonDisabled(data.length >= 3)}>
                            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span className="text-sm">Book</span>
                        </button>
                    </form>
                </div>
            </div >


        </section >
    );
};

export default Destination;