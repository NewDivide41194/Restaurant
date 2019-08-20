import React from 'react'
import KumoButton from '../../elements/kumoButton'
import { withMedia } from 'react-media-query-hoc';
import KumoInputBox from '../../elements/kumoInputBox';

const loginPage = () => {
    return (
        <div className='container-fluid' style={{ background: 'linear-gradient(to bottom, #02AAB0 0%, #00CDAC 100%)', height: '100vh' }}>
            <div className='row justify-content-center text-light align-items-center' style={{ height: '100%' }}>
                <div className='col-lg-4 col-md-6 col-10 col-xl-4' >
                    <form onSubmit={()=>alert('Hello')}>
                        <div className='d-flex flex-column align-items-center' >
                            <div style={{ width: 70, height: 70, borderRadius: '50%', border: '2px solid white', textAlign: 'center', color: 'white' }}><span><i className="fa fa-user fa-3x"></i></span></div>
                            <h2 className='p-3'>User Login</h2>
                        </div>

                        <label style={{ fontSize: '1.2rem' }} >Phone</label>
                        <KumoInputBox type='text' className='form-control mb-3' placeholder='User ID' />
                        <label style={{ fontSize: '1.2rem' }} >Password</label>
                        <KumoInputBox type='password' className='form-control mb-4' placeholder='Password' />
                        <KumoButton
                            type='submit'
                            text='Login'
                            style={{ height: 50 }}
                        />
                    </form>
                </div>

            </div>
        </div>
    )
}
export default withMedia(loginPage)