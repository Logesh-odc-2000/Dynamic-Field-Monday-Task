import React from 'react'
import { useState } from 'react'
import {Formik,Form,Field} from 'formik'




export default function Calender() {

    const [Time, setTime] = useState([{StartTime:'',EndTime:''}]);

    

    return (
        <>
        <div className=" mx-auto max-w-7xl   lg:pt-6 "
         style={{ height: "auto !important;" }}>
            <div classNameName="mx-auto  border  rounded-lg mt-12 grid max-w-2xl grid-cols-1 gap-y-8 gap-x-6 text-gray-6 sm:grid-cols-6">
            <Formik 
            initialValues={{
                title: '',
                location: '',
                description: '',
                timezone:'',
                allDay:'',
                startMonth:'',
                startDate:'',
                startYear:'',
                startHour:'',
                startMinute:'',
                startMeridem:'',
                EndMonth:'',
                EndDate:'',
                EndYear:'',
                EndtHour:'',
                EndMinute:'',
                EndMeridem:'',
                office:'',
                calender:''


              }}            
              onSubmit={(values, actions) => {
                setTime(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}>
            {({ values }) => (
                
                <Form>
                <div className=" sm:col-span-3">
                    <label classNameName=" text-sm font-medium text-gray-500">Event Title</label>
                    <div classNameName="mt-1">
                        <Field type="text" placeholder="Event title goes here..." id="title" name="title"
                       className="block w-full  rounded-md border  py-2 px-3 w-56  border-gray-3 font-medium shadow-sm focus:border-indigo-5 focus:ring-indigo-5 sm:max-w-lg sm:text-sm"/>
                    </div>
                </div><br />
                <div className=" sm:col-span-3">
                    <label className=" text-sm font-medium text-gray-500">Event Location</label>
                    <div className="r   mt-1 ">
                        <Field type="text" id="location" name="location"
                            className="block w-full  rounded-md border  py-2 px-3 w-56  border-gray-3 font-medium shadow-sm focus:border-indigo-5 focus:ring-indigo-5 sm:max-w-lg sm:text-sm" placeholder="Event location goes here..." />
                    </div>
                </div>
                <br />
                <div className=" sm:col-span-3">
                    <label className=" text-sm font-medium text-gray-500">Event Description</label>
                    <div className="r   mt-1 ">
                        <Field type="text" id="location" name="description"
                            className="block w-full  rounded-md border  py-2 px-3 w-56  border-gray-3 font-medium shadow-sm focus:border-indigo-5 focus:ring-indigo-5 sm:max-w-lg sm:text-sm" placeholder="Event location goes here..." />
                    </div>
                </div>
                <br/>
                <div className="sm:col-span-6 sm:max-w-lg">
                    <label for="timezone" className="block text-sm font-medium text-gray-500">Timezone</label>
                    <div className="mt-1">
                        <select  id="timezone" name="timezone" className="block w-full px-3 py-2 rounded-md border-gray-3 font-medium shadow-sm focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm">
                            <option value="Pacific/Niue">(GMT-11:) Niue Time</option>
                            <option value="Pacific/Pago_Pago">(GMT-11:) Samoa Standard Time</option>
                            <option value="Pacific/Rarotonga">(GMT-10:) Cook Islands Standard Time</option>
                            <option value="America/Nome">(GMT-08:) Alaska Time - Nome</option>
                            <option value="America/Sitka">(GMT-08:) Alaska Time - Sitka</option>
                            <option value="America/Tijuana">(GMT-07:) Pacific Time - Tijua<option value="America/El_Salvador">(GMT-06:) Central Standard Time - El Salvador</option>slotna</option>
                            <option value="Pacific/Easter">(GMT-06:) Easter Island Time</option>
                            <option value="America/Inuvik">(GMT-06:) Mountain Time - Inuvik</option><option value="America/Chicago">(GMT-05:) Central Time - Chicago</option>
                            <option value="America/Monterrey">(GMT-05:) Central Time - Monterrey</option>
                            <option selected value="America/Monterrey">(GMT+05:30) India Time - India</option>



                        </select>
                    </div>
                    <br />
                </div>
                
               
                <div className="sm:col-span-6">
                    <div className="flex items-center">
                        
                        <div  className="flex h-5  items-center">
                            <Field type="checkbox" id="allDay"  name="allDay" 
                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        </div>
                        <div className="ml-3 text-sm">
                            <label for="allDay" className="font-medium text-gray-500">All Day Event</label>
                            <span className="ml-3 text-gray-5">Is this an all day event?</span>
                        </div>
                    </div>
                </div>
                <br />
                <div className="flex gap-x-4 sm:col-span-6">
                    <div className="w-1/2 max-w-[12rem]">
                        <label for="startDay" className="block text-sm font-medium text-gray-500">Start Date</label>
                        <div className="mt-1 flex rounded-md bg-white shadow-sm">
                            <select className="relative block w-1/3 rounded-none rounded-l-md border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" style={{ backgroundImage: "none", paddingRight: "0.75rem" }} name="startMonth">
                                <option value="1">Jan</option>
                                <option value='2'>Feb</option>
                                <option value='3'>Mar</option>
                                <option value='4'>Apr</option>
                                <option value='5'>May</option>
                                <option value='6'>Jun</option>
                                <option value='7'>Jul</option>
                                <option value='8'>Aug</option>
                                <option value='9'>Sep</option>
                                <option selected value='10'>Oct</option>
                                <option value='11'>Nov</option>
                                <option value='12'>Dec</option>


                            </select>
                            <select className="relative -ml-px block w-1/3 rounded-none border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" style={{ backgroundImage: "none", paddingRight: "0.75rem" }} name="startDay">
                                <option value="1">1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>
                                <option value='16'>16</option>
                                <option  value='17'>17</option>
                                <option value='18'>18</option>
                                <option selected value='19'>19</option>
                                <option value='20'>20</option>
                                <option value='21'>21</option>
                                <option value='22'>22</option>
                                <option value='23'>23</option>
                                <option value='24'>24</option>
                                <option value='25'>25</option>
                                <option value='26'>26</option>
                                <option value='27'>27</option>
                                <option value='28'>28</option>
                                <option value='29'>29</option>
                                <option value='30'>30</option>
                                <option value='31'>31</option>
                            </select>
                            <select className="relative -ml-px block w-1/3 rounded-none rounded-r-md border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" style={{ backgroundImage: "none", paddingRight: "0.75rem" }} name="startYear">
                                <option selected value="2022">2005</option>
                                <option value='2'>2006</option>
                                <option value='2'>2007</option>
                                <option value='2'>2008</option>
                                <option value='2'>2009</option>
                                <option value='2'>2010</option>
                                <option value='2'>2011</option>
                                <option value='2'>2012</option>
                                <option value='2'>2013</option>
                                <option value='2'>2014</option>
                                <option value='2'>2015</option>
                                <option value='2'>2016</option>
                                <option value='2'>2016</option>
                                <option value='2'>2017</option>
                                <option value='2'>2018</option>
                                <option value='2'>2019</option>
                                <option value='2'>2020</option>
                                <option value='2'>2021</option>
                                <option selected value='2'>2022</option>

                            </select>
                        </div>
                    </div>
                    {values.allDay ?values.allDay :Time.map((x,i)=>(
                    <div className="w-1/2 max-w-[12rem]">
                        <label for="startHour" className="block text-sm font-medium text-gray-500">Start Time</label>
                        <div className="mt-1 flex rounded-md bg-white shadow-sm">
                            <select className="relative block w-1/3 rounded-none rounded-l-md border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" name="startHour" style={{ backgroundImage: "none", paddingRight: "0.75rem" }}  >
                                <option value="12">1</option>
                                <option value="12">2</option>
                                <option value="12">3</option>
                                <option value="12">4</option>
                                <option value="12">5</option>
                                <option value="12">6</option>
                                <option value="12">7</option>
                                <option value="12">8</option>
                                <option value="12">9</option>
                                <option selected value="12">10</option>
                                <option value="12">11</option>
                                <option value="12">12</option>
                            </select>
                            <select className="relative -ml-px block w-1/3 rounded-none border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" name="startMinute" style={{ backgroundImage: "none", paddingRight: "0.75rem" }}  >
                                <option value="0">1</option>
                                <option value="0">2</option>
                                <option value="0">3</option>
                                <option value="0">4</option>
                                <option value="0">5</option>
                                <option value="0">6</option>
                                <option value="0">7</option>
                                <option value="0">8</option>
                                <option value="0">9</option>
                                <option value="0">10</option>
                                <option value="0">11</option>
                                <option value="0">12</option>
                                <option value="0">13</option>
                                <option value="0">14</option>
                                <option value="0">15</option>
                                <option value="0">16</option>
                                <option selected value="0">17</option>
                                <option value="0">18</option>
                                <option value="0">19</option>
                                <option value="0">20</option>
                                <option value="0">21</option>
                                <option value="0">22</option>
                                <option value="0">23</option>
                                <option value="0">24</option>
                                <option value="0">25</option>
                                <option value="0">26</option>
                                <option value="0">27</option>
                                <option value="0">28</option>
                                <option value="0">29</option>
                                <option value="0">30</option>
                                <option value="0">31</option>
                                <option value="0">32</option>
                                <option value="0">33</option>
                                <option value="0">34</option>
                                <option value="0">35</option>
                                <option value="0">36</option>
                                <option value="0">37</option>
                                <option value="0">38</option>
                                <option value="0">39</option>
                                <option value="0">40</option>
                                <option value="0">41</option>
                                <option value="0">42</option>
                                <option value="0">43</option>
                                <option value="0">44</option>
                                <option value="0">45</option>
                                <option value="0">46</option>
                                <option value="0">47</option>
                                <option value="0">48</option>
                                <option value="0">49</option>
                                <option value="0">50</option>
                                <option value="0">51</option>
                                <option value="0">52</option>
                                <option value="0">53</option>
                                <option value="0">54</option>
                                <option value="0">55</option>
                                <option value="0">56</option>
                                <option value="0">57</option>
                                <option value="0">58</option>
                                <option value="0">59</option>
                                <option value="0">60</option>
                            </select>
                            <select className="relative -ml-px block w-1/3 rounded-none rounded-r-md border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" name="startMeridem" style={{ backgroundImage: "none", paddingRight: "0.75rem" }}  >
                                <option value="am">am</option>
                                <option value="am">pm</option>
                            </select>
                        </div>
                    </div>
                     ))}
                </div><br />
                <div className="flex gap-x-4 sm:col-span-6">
                    <div className="w-1/2 max-w-[12rem]">
                        <label for="endDay" className="block text-sm font-medium text-gray-500">End Date</label>
                        <div className="mt-1 flex rounded-md bg-white shadow-sm">
                            <select className="relative block w-1/3 rounded-none rounded-l-md border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" style={{ backgroundImage: "none", paddingRight: "0.75rem" }} name="endMonth">
                                <option value="1">Jan</option>
                                <option value='2'>Feb</option>
                                <option value='3'>Mar</option>
                                <option value='4'>Apr</option>
                                <option value='5'>May</option>
                                <option value='6'>Jun</option>
                                <option value='7'>Jul</option>
                                <option value='8'>Aug</option>
                                <option value='9'>Sep</option>
                                <option selected value='10'>Oct</option>
                                <option value='11'>Nov</option>
                                <option value='12'>Dec</option>
                            </select>
                            <select className="relative -ml-px block w-1/3 rounded-none border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" style={{ backgroundImage: "none", paddingRight: "0.75rem" }} name="startDay">
                                <option value="1">1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>
                                <option value='16'>16</option>
                                <option selected value='17'>17</option>
                                <option value='18'>18</option>
                                <option selected value='19'>19</option>
                                <option value='20'>20</option>
                                <option value='21'>21</option>
                                <option value='22'>22</option>
                                <option value='23'>23</option>
                                <option value='24'>24</option>
                                <option value='25'>25</option>
                                <option value='26'>26</option>
                                <option value='27'>27</option>
                                <option value='28'>28</option>
                                <option value='29'>29</option>
                                <option value='30'>30</option>
                                <option value='31'>31</option>
                            </select>
                            <select className="relative -ml-px block w-1/3 rounded-none rounded-r-md border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm"
                                style={{ backgroundImage: "none", paddingRight: "0.75rem" }}
                                name="startYear">
                                <option selected value="2022">2005</option>
                                <option value='2'>2006</option>
                                <option value='2'>2007</option>
                                <option value='2'>2008</option>
                                <option value='2'>2009</option>
                                <option value='2'>2010</option>
                                <option value='2'>2011</option>
                                <option value='2'>2012</option>
                                <option value='2'>2013</option>
                                <option value='2'>2014</option>
                                <option value='2'>2015</option>
                                <option value='2'>2016</option>
                                <option value='2'>2016</option>
                                <option value='2'>2017</option>
                                <option value='2'>2018</option>
                                <option value='2'>2019</option>
                                <option value='2'>2020</option>
                                <option value='2'>2021</option>
                                <option selected value='2'>2022</option>
                            </select>
                        </div>
                    </div>
                    {values.allDay?values.allDay : Time.map((x,i)=>(
                    <div className="w-1/2 max-w-[12rem]">
                        <label for="endHour" className="block text-sm font-medium text-gray-500">End Time</label>
                        <div className="mt-1 flex rounded-md bg-white shadow-sm">
                            <select className="relative block w-1/3 rounded-none rounded-l-md border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" name="endHour" style={{ backgroundImage: "none", paddingRight: "0.75rem" }}  >
                                <option value="12">1</option>
                                <option value="12">2</option>
                                <option value="12">3</option>
                                <option value="12">4</option>
                                <option value="12">5</option>
                                <option value="12">6</option>
                                <option value="12">7</option>
                                <option value="12">8</option>
                                <option value="12">9</option>
                                <option value="12">10</option>
                                <option value="12">11</option>
                                <option value="12">12</option>
                            </select>
                            <select className="relative -ml-px block w-1/3 rounded-none border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" name="endMinute" style={{ backgroundImage: "none", paddingRight: "0.75rem" }}  >
                                <option value="0">1</option>
                                <option value="0">2</option>
                                <option value="0">3</option>
                                <option value="0">4</option>
                                <option value="0">5</option>
                                <option value="0">6</option>
                                <option value="0">7</option>
                                <option value="0">8</option>
                                <option value="0">9</option>
                                <option value="0">10</option>
                                <option value="0">11</option>
                                <option value="0">12</option>
                                <option value="0">13</option>
                                <option value="0">14</option>
                                <option value="0">15</option>
                                <option value="0">16</option>
                                <option value="0">17</option>
                                <option value="0">18</option>
                                <option value="0">19</option>
                                <option value="0">20</option>
                                <option value="0">21</option>
                                <option value="0">22</option>
                                <option value="0">23</option>
                                <option value="0">24</option>
                                <option value="0">25</option>
                                <option value="0">26</option>
                                <option value="0">27</option>
                                <option value="0">28</option>
                                <option value="0">29</option>
                                <option value="0">30</option>
                                <option value="0">31</option>
                                <option value="0">32</option>
                                <option value="0">33</option>
                                <option value="0">34</option>
                                <option value="0">35</option>
                                <option value="0">36</option>
                                <option value="0">37</option>
                                <option value="0">38</option>
                                <option value="0">39</option>
                                <option value="0">40</option>
                                <option value="0">41</option>
                                <option value="0">42</option>
                                <option value="0">43</option>
                                <option value="0">44</option>
                                <option value="0">45</option>
                                <option value="0">46</option>
                                <option value="0">47</option>
                                <option value="0">48</option>
                                <option value="0">49</option>
                                <option value="0">50</option>
                                <option value="0">51</option>
                                <option value="0">52</option>
                                <option value="0">53</option>
                                <option value="0">54</option>
                                <option value="0">55</option>
                                <option value="0">56</option>
                                <option value="0">57</option>
                                <option value="0">58</option>
                                <option value="0">59</option>
                                <option value="0">60</option>
                            </select>
                            <select className="relative -ml-px block w-1/3 rounded-none rounded-r-md border-gray-3 bg-transparent text-center font-medium focus:z-10 focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm" name="endMeridem" style={{ backgroundImage: "none", paddingRight: "0.75rem" }}  >
                                <option value="am">am</option>
                                <option value="am">pm</option>
                            </select>
                        </div>
                    </div>
                     ))}
                </div>
                <div class="grid grid-cols-1 gap-y-6 gap-x-4 pt-8 sm:grid-cols-6">
                    <div class="sm:col-span-5">
                        <label class="block text-sm font-medium text-gray-500">Google Calendar</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <div class="relative flex flex-grow items-stretch focus-within:z-10">
                                <Field  type="text"  className=" w-full  rounded-md border  py-2 px-3  border-gray-3 font-medium shadow-sm focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm"
                            value={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221010%2F20221011${values.title}/%${values.location}&/${values.description}`} /> 
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-5">
                        <label class="block text-sm font-medium text-gray-500">Microsoft Outlook Calendar</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <div class="relative flex flex-grow items-stretch focus-within:z-10">
                                <Field  type="text"  className=" w-full  rounded-md border  py-2 px-3  border-gray-3 font-medium shadow-sm focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm"
                            value={`https://outlook.live.com/calendar/0/deeplink/compose?allday=false&path=%2Fcalendar%${values.title}%${values.location}&${values.description}`} /> 
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-5">
                        <label class="block text-sm font-medium text-gray-500">Office 365 Calendar</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <div class="relative flex flex-grow items-stretch focus-within:z-10">
                                <Field  type="text"  className=" w-full  rounded-md border  py-2 px-3  border-gray-3 font-medium shadow-sm focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm"
                                value={`https://office.live.com/calendar/0/deeplink/compose?allday=false&path=%2Fcalendar%${values.title}%${values.location}&${values.description}`} 
                                 /> 
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-5">
                        <label class="block text-sm font-medium text-gray-500">Yahoo! Calendar Calendar</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <div class="relative flex flex-grow items-stretch focus-within:z-10">
                                <Field  type="text"  className=" w-full  rounded-md border  py-2 px-3  border-gray-3 font-medium shadow-sm focus:border-indigo-5 focus:ring-indigo-5 sm:text-sm"
                            value={`https://calendar.yahoo.com/?dur=&et=20221010T110000Z&20221010=sxscsacc${values.title}&${values.location}&${values.description}`} /> 
                            </div>
                        </div>
                    </div>
                </div>
                </Form>
            )}
                </Formik>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
      </>  
    )
}
