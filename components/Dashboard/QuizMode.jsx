import React from 'react'

export default function QuizMode() {
    return (
        <>
            <div className="quiz-mode">
                <div class="card quiz-card">
                    <div class="card-header text-white d-flex justify-content-between">
                        <span className='fw-bold'>Quizmode</span>
                        <div class="dropdown">
                            <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body quiz-card ">
                        <div className="d-flex justify-content-center" style={{gap: '20px'}}>
                            <div className='d-flex flex-column align-items-center'>
                                <div className="icon d-flex justify-content-center align-items-center mb-2">
                                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.72933 26.423C7.18486 26.126 6.72288 25.862 6.24441 25.598C4.61099 24.707 2.97757 23.7996 1.32765 22.9251C0.88217 22.6941 0.552184 22.3806 0.552184 21.8527C0.552184 21.3247 0.865667 21.0112 1.31115 20.7802C3.22505 19.7408 5.13896 18.6848 7.05286 17.6454C7.25085 17.5464 7.44885 17.4309 7.69634 17.2824C7.51485 17.1669 7.38285 17.0844 7.23436 17.0019C5.22145 15.913 3.22506 14.8075 1.21215 13.7186C0.519188 13.3391 0.321197 12.6131 0.766675 12.0522C0.915168 11.8707 1.12965 11.7387 1.34414 11.6232C7.31685 8.35634 13.3061 5.08949 19.2788 1.82265C19.8727 1.49267 20.4832 1.19569 21.0607 0.849205C21.6217 0.502722 22.1331 0.53572 22.7106 0.849205C26.3404 2.86211 29.9867 4.84202 33.6166 6.83842C36.5369 8.43884 39.4738 10.0558 42.3941 11.6562C42.8231 11.8872 43.1696 12.1842 43.1861 12.7121C43.1861 13.2731 42.8396 13.5701 42.3941 13.8176C40.4142 14.89 38.4343 15.979 36.4544 17.0679C36.3224 17.1339 36.1904 17.2164 36.0255 17.3154C37.9394 18.3713 39.8203 19.3943 41.6847 20.4172C41.9157 20.5327 42.1302 20.6647 42.3611 20.7802C42.8396 21.0112 43.1861 21.3412 43.1861 21.9187C43.1861 22.4797 42.8231 22.7766 42.3776 23.0076C40.4142 24.0636 38.4673 25.136 36.5204 26.2085C36.3884 26.291 36.2399 26.3735 36.042 26.4725C36.3389 26.6374 36.5864 26.7859 36.8174 26.9179C38.6653 27.9244 40.5132 28.9308 42.3611 29.9373C42.8066 30.1848 43.1696 30.4818 43.1696 31.0262C43.1696 31.5872 42.8231 31.8842 42.3776 32.1317C35.7945 35.712 29.2113 39.2923 22.6446 42.8727C22.1001 43.1696 21.6217 43.1696 21.0772 42.8727C14.494 39.2593 7.91083 35.646 1.32765 32.0492C0.88217 31.8017 0.519185 31.5047 0.535684 30.9437C0.535684 30.4158 0.882166 30.1188 1.31115 29.8878C3.40654 28.7493 5.50195 27.5944 7.69634 26.4065L7.72933 26.423ZM3.91802 12.7286C4.09951 12.8441 4.21501 12.9101 4.3305 12.9761C10.0722 16.1275 15.7974 19.2788 21.5227 22.4302C21.8031 22.5786 22.0011 22.5622 22.2651 22.4137C27.4789 19.5428 32.7091 16.6719 37.9229 13.8176C38.5498 13.4711 39.1768 13.1246 39.8368 12.7451C39.6883 12.6626 39.6058 12.6131 39.5233 12.5636C33.7486 9.3958 27.9738 6.22794 22.1991 3.06009C21.9516 2.9281 21.7702 2.94461 21.5392 3.07661C17.9753 5.04001 14.395 7.00341 10.8147 8.95031C8.5378 10.2043 6.2444 11.4417 3.90152 12.7286H3.91802ZM3.93452 31.0427C4.06651 31.1252 4.14901 31.1747 4.24801 31.2242C10.0227 34.3921 15.7974 37.5434 21.5722 40.7277C21.8526 40.8762 22.0341 40.8267 22.2651 40.6947C27.4954 37.8239 32.7421 34.953 37.9724 32.0822C38.5828 31.7522 39.1933 31.4057 39.8533 31.0427C39.6553 30.9272 39.5233 30.8447 39.3748 30.7622C37.6589 29.8053 35.9265 28.8648 34.2105 27.8914C33.8971 27.7099 33.6661 27.7264 33.3526 27.8914C29.7888 29.8548 26.2084 31.8182 22.6446 33.7816C22.1166 34.0786 21.6547 34.0621 21.1267 33.7816C17.5464 31.8017 13.9495 29.8383 10.3692 27.8749C10.1217 27.7429 9.94022 27.7099 9.67624 27.8584C7.89432 28.8648 6.09591 29.8383 4.314 30.8282C4.1985 30.8942 4.08301 30.9602 3.95102 31.0592L3.93452 31.0427ZM3.91802 21.8857C4.13251 22.0012 4.26451 22.0837 4.3965 22.1497C10.0887 25.268 15.7974 28.3864 21.4897 31.5212C21.7866 31.6862 22.0011 31.6862 22.2981 31.5212C27.9903 28.3864 33.6826 25.268 39.3913 22.1497C39.5233 22.0672 39.6553 21.9847 39.8368 21.8857C39.6883 21.7867 39.5893 21.7207 39.4903 21.6712C37.7084 20.6977 35.9265 19.7243 34.161 18.7343C33.8971 18.5858 33.6991 18.6023 33.4186 18.7343C29.8383 20.7142 26.2414 22.6611 22.6611 24.641C22.1331 24.938 21.6712 24.938 21.1432 24.641C17.5629 22.6611 13.966 20.6977 10.3857 18.7343C10.1217 18.5858 9.92372 18.5693 9.64324 18.7343C8.4388 19.4108 7.21786 20.0708 6.01342 20.7307C5.33695 21.0937 4.67698 21.4732 3.93452 21.8692L3.91802 21.8857Z" fill="white" />
                                    </svg>
                                </div>
                                <h6 className='fw-bold'>Muliple</h6>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <div className="icon d-flex justify-content-center align-items-center mb-2">
                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.4389 15.484C42.3069 16.2264 42.2409 16.9689 42.0429 17.6949C40.5084 23.1726 36.9281 26.5219 31.4009 27.7594C30.2295 28.0234 29.025 28.0729 27.8206 27.9574C27.7546 27.9574 27.6886 27.9574 27.6061 27.9574C27.8866 32.6926 26.3191 36.6524 22.6893 39.7213C20 41.9817 16.8321 43.0211 13.3343 42.7901C5.90965 42.3282 0.21742 35.9595 0.580403 28.5678C0.943385 21.0112 7.60906 15.088 15.4297 15.7645C15.4297 15.55 15.3967 15.3355 15.3967 15.121C15.1162 8.4388 19.6535 2.5651 26.1871 1.17916C26.7646 1.06367 27.3421 0.997677 27.9196 0.898682C28.5795 0.898682 29.223 0.898682 29.883 0.898682C30.1965 0.948179 30.5264 0.997671 30.8399 1.04717C36.1692 1.75663 40.8384 5.98045 42.0759 11.2272C42.2574 11.9862 42.3564 12.7451 42.4884 13.5206V15.484H42.4389ZM28.86 3.37356C22.7718 3.37356 17.8056 8.35633 17.8056 14.494C17.8056 20.5822 22.7388 25.5485 28.827 25.565C34.9647 25.5815 39.964 20.6317 39.997 14.5435C40.0135 8.40582 35.0142 3.39008 28.8765 3.39008L28.86 3.37356ZM14.1427 18.1898V18.0908C13.1528 18.2558 12.1463 18.3383 11.1894 18.6023C5.59616 20.1367 2.23033 25.3835 3.13778 31.1252C4.16073 37.6919 11.1399 41.9487 17.4591 39.8533C22.5738 38.1539 25.7582 33.1216 25.0652 27.8089C25.0322 27.5284 24.8837 27.4294 24.6527 27.3469C20.7424 25.994 17.9706 23.4036 16.3206 19.5923C16.1391 19.1633 16.0236 18.5693 15.6937 18.3548C15.3142 18.1238 14.7202 18.2228 14.2087 18.1898C14.1757 18.1898 14.1592 18.1898 14.1262 18.1898H14.1427Z" fill="white" />
                                        <path d="M12.8559 33.3029C11.5195 31.9665 10.1501 30.5971 8.79712 29.2441C9.34159 28.6996 9.90256 28.1387 10.48 27.5612C11.2555 28.3367 12.0475 29.1286 12.8559 29.9536C14.5058 28.2872 16.1393 26.6702 17.7397 25.0698C18.3502 25.6803 18.9111 26.2412 19.4226 26.7527C17.2612 28.9141 15.0503 31.125 12.8559 33.3194V33.3029Z" fill="white" />
                                        <path d="M28.7941 12.7944C29.6686 11.92 30.4606 11.1115 31.236 10.3525C31.83 10.963 32.391 11.524 33.0014 12.1345C32.2425 12.8769 31.434 13.6689 30.609 14.4773C31.4505 15.3188 32.259 16.1108 33.0179 16.8862C32.4075 17.4802 31.8465 18.0577 31.2525 18.6517C30.51 17.8927 29.7016 17.0842 28.8931 16.2758C28.0517 17.1172 27.2597 17.9092 26.5007 18.6846C25.9068 18.0742 25.3293 17.5132 24.7848 16.9522C25.5273 16.2098 26.3358 15.4178 27.1442 14.5928C26.2698 13.7514 25.4448 12.9759 24.6528 12.217C25.3128 11.557 25.8903 10.996 26.4513 10.4185C27.1937 11.1775 27.9857 11.9695 28.7941 12.8109V12.7944Z" fill="white" />
                                    </svg>

                                </div>
                                <h6 className='fw-bold'>True & False</h6>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <div className="icon d-flex justify-content-center align-items-center mb-2">
                                    <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.140869 6.05586C0.421355 5.54439 0.833842 5.3794 1.41131 5.3959C3.7707 5.4124 6.13007 5.3959 8.48946 5.3959C8.65445 5.3959 8.83593 5.3959 9.05042 5.3959C8.75344 3.94397 9.05043 2.67352 10.1394 1.66707C10.9148 0.957604 11.8388 0.660616 12.8947 0.710113C15.0891 0.842107 16.4091 2.69004 16.1781 5.3959C16.3431 5.3959 16.5246 5.3959 16.6896 5.3959C17.762 5.3959 18.851 5.3959 19.9234 5.3959C20.4679 5.3959 20.8474 5.80838 20.8639 6.31985C20.8639 6.79833 20.5009 7.2438 20.0059 7.2603C18.5705 7.27679 17.1351 7.30979 15.6996 7.2603C14.6602 7.2108 14.0167 6.17134 14.2642 5.1154C14.3632 4.70292 14.4127 4.24096 14.3137 3.84498C14.0662 2.90452 13.0597 2.39304 12.1358 2.67352C11.1953 2.95401 10.6839 3.89447 10.8984 4.85143C10.9808 5.23091 11.0633 5.65989 10.9973 6.03937C10.8653 6.79833 10.1559 7.2933 9.29793 7.2933C7.07054 7.2933 4.82665 7.2933 2.59926 7.2933C2.43427 7.2933 2.26926 7.2933 2.07127 7.2933V28.4288H9.05042C8.88543 25.4424 10.3374 23.6935 12.8452 23.776C14.6602 23.842 16.7556 25.5744 16.1946 28.4288H23.1902V21.4661C20.1874 21.6146 18.455 20.1957 18.5375 17.6713C18.6035 15.9059 20.3029 13.7445 23.2233 14.3385C23.2233 14.0415 23.2233 13.761 23.2233 13.464C23.2233 12.5401 23.2233 11.6161 23.2233 10.6921C23.2233 10.0487 23.6192 9.63618 24.1637 9.63618C24.7082 9.63618 25.0876 10.0652 25.0876 10.7086C25.0876 11.9791 25.0876 13.233 25.0876 14.5034C25.0876 15.8069 24.0812 16.5493 22.8108 16.2029C21.5568 15.8399 20.4184 16.6153 20.4019 17.8528C20.3854 19.1232 21.5238 19.9482 22.7943 19.5687C23.8832 19.2552 24.8072 19.7502 25.0547 20.7731C25.1042 20.9876 25.1042 21.2021 25.1042 21.4166C25.1042 23.743 25.1042 26.0694 25.1042 28.4618H25.6156C27.8265 28.4618 30.0539 28.4618 32.2648 28.4618C33.6342 28.4618 34.3767 29.4517 33.9972 30.7882C33.7662 31.6296 34.0137 32.3886 34.6902 32.8506C35.3007 33.263 36.1091 33.263 36.7196 32.8506C37.3795 32.3886 37.627 31.6131 37.3796 30.7717C37.0001 29.4847 37.7425 28.4783 39.0955 28.4783C41.4714 28.4783 43.8472 28.4783 46.2561 28.4783V7.32631H39.2605C39.5575 8.76174 39.2605 10.0487 38.1385 11.0551C37.363 11.7646 36.4226 12.0451 35.3831 11.9791C33.7002 11.8636 31.5883 10.2467 32.1493 7.2933C31.9678 7.2933 31.8028 7.2933 31.6378 7.2933C30.5654 7.2933 29.4764 7.2933 28.404 7.2933C27.8595 7.2933 27.48 6.89732 27.4635 6.38584C27.4635 5.87437 27.8265 5.44538 28.3545 5.42888C29.7569 5.41238 31.1593 5.39589 32.5618 5.42888C33.6342 5.46188 34.3107 6.51784 34.0632 7.57378C33.9642 8.00276 33.9147 8.48125 34.0137 8.89373C34.2612 9.81768 35.2676 10.3127 36.1751 10.0487C37.0991 9.78468 37.6435 8.86072 37.4455 7.93677C37.4125 7.82127 37.3796 7.70578 37.3466 7.57378C37.0496 6.48484 37.792 5.42888 38.9305 5.42888C41.6858 5.41238 44.4247 5.42888 47.1801 5.42888C47.8235 5.42888 48.17 5.82486 48.17 6.53433C48.17 9.0422 48.17 11.5666 48.17 14.0745C48.17 19.0902 48.17 24.106 48.17 29.1052C48.17 30.0292 47.8565 30.3427 46.9326 30.3427C44.5567 30.3427 42.1808 30.3427 39.8214 30.3427C39.6564 30.3427 39.475 30.3427 39.2605 30.3427C39.5575 31.7616 39.2605 33.0155 38.2375 34.022C37.4785 34.748 36.5711 35.0779 35.5151 35.0284C33.2713 34.9459 31.9513 33.131 32.1328 30.3427H31.5718C26.4736 30.3427 21.3588 30.3097 16.2606 30.3592C14.7262 30.3592 13.8847 29.1547 14.3632 27.9173C14.6437 27.1913 14.3137 26.4159 13.6867 25.9704C13.0762 25.5414 12.2348 25.5414 11.6243 25.9704C11.0138 26.4159 10.6674 27.1913 10.9478 27.9008C11.4098 29.0887 10.6509 30.3922 9.06694 30.3592C6.54256 30.2932 4.00168 30.3262 1.4773 30.3592C0.899828 30.3592 0.487366 30.1942 0.20688 29.6992V6.08887L0.140869 6.05586Z" fill="white" />
                                        <path d="M24.1638 5.41236C24.6752 5.42886 25.0877 5.89085 25.0547 6.40232C25.0217 6.8973 24.5762 7.29328 24.0813 7.27678C23.5698 7.26028 23.1573 6.79829 23.1903 6.28682C23.2233 5.79184 23.6688 5.39586 24.1638 5.41236Z" fill="white" />
                                    </svg>

                                </div>
                                <h6 className='fw-bold'>Matching</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}