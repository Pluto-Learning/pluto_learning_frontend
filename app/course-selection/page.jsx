import MultiStepForm from '@/components/MultiStepForm'
import MyCalendar from '@/components/MyCalendar'
import ProfileLayout from '@/layouts/profileLayout/ProfileLayout'
import React from 'react'

export default function page() {
  return (
    <ProfileLayout>
            <div className="profile-content">
                <div className="course-selection">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* <CourseSelectionForm /> */}
                            <h5 className='greetings'>Hi Ethan, lets start with telling us a bit about yourself</h5>
                            <h4 className='question'>What year are you in?</h4>
                            <MultiStepForm />
                        </div>
                        <div className="col-lg-6">
                            <MyCalendar />
                        </div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
  )
}
