import JoinATablePopup from '@/components/JoinATablePopup'
import React from 'react'

export default function () {
    return (
        <div>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#joinTable">
                Launch demo modal
            </button>

            <div class="modal fade" id="joinTable" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div>
                                <h6 class="modal-title fs-5" id="exampleModalLabel">Modal title</h6>
                                <p>Take a look your learning progress for today September 22, 2024</p>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <JoinATablePopup />
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <JoinATablePopup />
        </div>
    )
}
