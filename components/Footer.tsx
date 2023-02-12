import React from 'react';
import Button from './Button';
import TextField from './TextField';
const data = {
  aboutList: [
    { title: 'About  Gromart' },
    { title: 'Sustainability' },
    { title: 'Our blog' },
    { title: 'Join our team!' },
    { title: 'Contact us' },
    { title: 'Invite friends' },
  ],
  supportList: [
    { title: 'Help' },
    { title: 'FAQ' },
    { title: 'Accessibility' },
  ],
  legalList: [{ title: 'Terms of Service' }, { title: 'Privacy policy ' }],
  socialList: [
    { title: 'Instagram' },
    { title: 'Twitter ' },
    { title: 'Facebook' },
    { title: 'Pinterest' },
    { title: 'TikTok' },
  ],
};

function Footer() {
  return (
    <footer className="footer_container ">
      <div className="flex">
        <div className="flex justify-between w-3/4 pr-10 ">
          <div className="px-3">
            <span className="text-base font-semibold capitalize block my-2">
              about
            </span>
            <div>
              <ul>
                {data.aboutList.map(
                  ({ title }: { title: string }, i: number) => (
                    <li className="text-sm font-normal my-2" key={`about-${i}`}>
                      {title}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="px-3">
            <span className="text-base font-semibold capitalize block my-2">
              Support
            </span>
            <div>
              <ul>
                {data.supportList.map(
                  ({ title }: { title: string }, i: number) => (
                    <li
                      className="text-sm font-normal my-2"
                      key={`support-${i}`}
                    >
                      {title}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="px-3">
            <span className="text-base font-semibold capitalize block my-2">
              Legal
            </span>
            <div>
              <ul>
                {data.legalList.map(
                  ({ title }: { title: string }, i: number) => (
                    <li className="text-sm font-normal my-2" key={`legel-${i}`}>
                      {title}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="px-3">
            <span className="text-base font-semibold capitalize block my-2">
              Social
            </span>
            <div>
              <ul>
                {data.socialList.map(
                  ({ title }: { title: string }, i: number) => (
                    <li
                      className="text-sm font-normal my-2"
                      key={`social-${i}`}
                    >
                      {title}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="text-xl font-semibold py-2">Get the Dirt.</div>
          <p className="text-sm py-2">
            Get care tips, exclusive offers, & event invites straight to your
            inbox. No spam ever.
          </p>
          <TextField
            className="text-field w-full my-2"
            placeholder={'Enter your email here...'}
          />
          <Button className="button w-full text-sm my-3">Subscribe</Button>
        </div>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
