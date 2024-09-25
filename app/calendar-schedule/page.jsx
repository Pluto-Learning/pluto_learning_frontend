
import MyCalendar from '@/components/MyCalendar'
import SimpleCalendar from '@/components/simpleCalendar/SimpleCalendar'
import ProfileLayout from '@/layouts/profileLayout/ProfileLayout'


export default function page() {

    return (
        <ProfileLayout>
            <div className="container-fluid">
                <div className="profile-content">
                    <div className="calendar-schedule">
                        <div className="row g-3">
                            <div className="col-xl-2">
                                <div className="calendar-schedule-left">
                                    <SimpleCalendar />
                                    {/* <div class="accordion calendar-filter-accordion" id="calendar-filter-accordion">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    My Calendars
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#calendar-filter-accordion">
                                                <div class="accordion-body">
                                                    <form>
                                                        <div class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value="" id="calendar-filter-checkbox-1" />
                                                            <label class="form-check-label" for="calendar-filter-checkbox-1">
                                                                My Schedules
                                                            </label>
                                                        </div>
                                                        <div class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value="" id="calendar-filter-checkbox-2" />
                                                            <label class="form-check-label" for="calendar-filter-checkbox-2">
                                                                Task and Events
                                                            </label>
                                                        </div>
                                                        <div class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value="" id="calendar-filter-checkbox-3" />
                                                            <label class="form-check-label" for="calendar-filter-checkbox-3">
                                                                Projects
                                                            </label>
                                                        </div>
                                                        <div class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value="" id="calendar-filter-checkbox-4" />
                                                            <label class="form-check-label" for="calendar-filter-checkbox-4">
                                                                Holidays
                                                            </label>
                                                        </div>
                                                        <button className="btn">+ Add New</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="task-main">
                                        <div className="task-top">
                                            <h6 className="task-title">My Tasks</h6>
                                        </div>
                                        <form>
                                            <ul class="list-group list-group-flush task-list">
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-1" />
                                                    <label class="form-check-label" for="task-checkbox-1">Meeting With Juniors</label>
                                                    {/* <span class="checkmark"></span> */}
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-2" />
                                                    <label class="form-check-label" for="task-checkbox-2">Create an adaptive UI</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-3" />
                                                    <label class="form-check-label" for="task-checkbox-3">Design & wireframe for iOS</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-4" />
                                                    <label class="form-check-label" for="task-checkbox-4">Design & wireframe for iOS</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-5" />
                                                    <label class="form-check-label" for="task-checkbox-5">Meeting with My Team</label>
                                                </li>
                                            </ul>

                                            <div className="btn-wrapper">
                                                <button className="btn rounded-pill add-task-btn">+ Add New</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <MyCalendar />
                            </div>
                            <div className="col-xl-2">
                                <div className="calendar-schedule-right">
                                    <h4>My Tasks</h4>
                                    <div className="task-main">
                                        <div className="task-top">
                                            <h6 className="task-title">Office</h6>
                                            <div className='task-count border rounded-pill'>
                                                <p>1/4</p>
                                            </div>
                                            <div class="dropdown ms-auto">
                                                <button class="btn btn-sm border rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-solid fa-ellipsis"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <form>
                                            <ul class="list-group list-group-flush task-list">
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-1" />
                                                    <label class="form-check-label" for="task-checkbox-1">Meeting With Juniors</label>
                                                    {/* <span class="checkmark"></span> */}
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-2" />
                                                    <label class="form-check-label" for="task-checkbox-2">Create an adaptive UI</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-3" />
                                                    <label class="form-check-label" for="task-checkbox-3">Design & wireframe for iOS</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-4" />
                                                    <label class="form-check-label" for="task-checkbox-4">Design & wireframe for iOS</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-5" />
                                                    <label class="form-check-label" for="task-checkbox-5">Meeting with My Team</label>
                                                </li>
                                            </ul>

                                            <div className="btn-wrapper">
                                                <button className="btn rounded-pill add-task-btn">+ Add Task</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="task-main">
                                        <div className="task-top">
                                            <h6 className="task-title">Office</h6>
                                            <div className='task-count border rounded-pill'>
                                                <p>1/4</p>
                                            </div>
                                            <div class="dropdown ms-auto">
                                                <button class="btn btn-sm border rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-solid fa-ellipsis"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <form>
                                            <ul class="list-group list-group-flush task-list">
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-1" />
                                                    <label class="form-check-label" for="task-checkbox-1">Meeting With Juniors</label>
                                                    {/* <span class="checkmark"></span> */}
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-2" />
                                                    <label class="form-check-label" for="task-checkbox-2">Create an adaptive UI</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-3" />
                                                    <label class="form-check-label" for="task-checkbox-3">Design & wireframe for iOS</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-4" />
                                                    <label class="form-check-label" for="task-checkbox-4">Design & wireframe for iOS</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-5" />
                                                    <label class="form-check-label" for="task-checkbox-5">Meeting with My Team</label>
                                                </li>
                                            </ul>

                                            <div className="btn-wrapper">
                                                <button className="btn rounded-pill add-task-btn">+ Add Task</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="task-main">
                                        <div className="task-top">
                                            <h6 className="task-title">Office</h6>
                                            <div className='task-count border rounded-pill'>
                                                <p>1/4</p>
                                            </div>
                                            <div class="dropdown ms-auto">
                                                <button class="btn btn-sm border rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-solid fa-ellipsis"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <form>
                                            <ul class="list-group list-group-flush task-list">
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-1" />
                                                    <label class="form-check-label" for="task-checkbox-1">Meeting With Juniors</label>
                                                    {/* <span class="checkmark"></span> */}
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-2" />
                                                    <label class="form-check-label" for="task-checkbox-2">Create an adaptive UI</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-3" />
                                                    <label class="form-check-label" for="task-checkbox-3">Design & wireframe for iOS</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-4" />
                                                    <label class="form-check-label" for="task-checkbox-4">Design & wireframe for iOS</label>
                                                </li>
                                                <li class="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="" id="task-checkbox-5" />
                                                    <label class="form-check-label" for="task-checkbox-5">Meeting with My Team</label>
                                                </li>
                                            </ul>

                                            <div className="btn-wrapper">
                                                <button className="btn rounded-pill add-task-btn">+ Add Task</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </ProfileLayout>
    )
}
