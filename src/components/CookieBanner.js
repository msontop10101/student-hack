import React, { useState } from 'react'
import { posthog } from 'posthog-js'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true)

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShowBanner(false)
  }
  const declineCookies = () => {
    posthog.opt_out_capturing()
    setShowBanner(false)
  }

  return (
    <>
      <div className='w-[99vw]'>
        {showBanner && <div className='bg-black text-white'>
          <div className='p-4'>
            <p className='text-sm'> En cliquant sur « Accepter tous les cookies », vous acceptez le stockage de cookies sur votre appareil pour améliorer la navigation sur le site, analyser son utilisation et contribuer à nos efforts de marketing.</p>
            <div className='flex flex-col gap-2 mt-2'>
              <button type='button' className='bg-[#B1A1ED] p-2 rounded-lg' onClick={acceptCookies}>Accepter tous les cookies</button>
              <button type='button' className='border-2 border-[#B1A1ED] p-2 rounded-lg' onClick={declineCookies}>Tout refuer</button>
            </div>
          </div>
        </div>}

      </div>
    </>
  )
}

export default CookieBanner