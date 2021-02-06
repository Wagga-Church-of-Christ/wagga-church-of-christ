import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import WhoWeAreSection from './WhoWeAreSection';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import WhatsOnSection from './WhatsOnSection';
import './AboutPage.scss'


interface IAboutPageProps {
  defaultSection: number;
}

interface IAboutPageState {
  title?: string;
  currentBannerImage?: string;
  bannerMobilePosition?: string;
  currentSection?: number;
  defaultSection: number;
}


const AboutPageTemplate = ({ data, pageContext }) => {
  const { defaultSection } = pageContext

  return (
    <AboutPage defaultSection={defaultSection}></AboutPage>
  )
}

class AboutPage extends React.Component<IAboutPageProps, IAboutPageState> {

  constructor(props: IAboutPageProps) {
    super(props);
    this.state = {
      defaultSection: props.defaultSection
    }
  }

  handleSectionChange = (bannerImage, title, bannerMobilePosition) => {
    this.setState({
      currentBannerImage: bannerImage,
      title: title,
      bannerMobilePosition: bannerMobilePosition
    })
  }

  render() {
    return (
      <Page>
        <PageBanner title={this.state.title} imageUrl={this.state.currentBannerImage} bannerMobilePosition={this.state.bannerMobilePosition} titleColour="white" />
        <PageSidebar defaultSection={this.state.defaultSection} onSectionChange={this.handleSectionChange} currentSection={this.state.currentSection}>

          <PageSection
            linkTitle="Who we are"
            bannerImageUrl="/img/fire-in-the-sky.jpg"
            url="/who-we-are"
            bannerMobilePosition="right">
            <WhoWeAreSection />
          </PageSection>

          <PageSection
            linkTitle="What we believe"
            bannerImageUrl="https://images.unsplash.com/photo-1496338406295-3adc3db91a89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
            url="/what-we-believe"
            bannerMobilePosition="center">
            <WhatWeBelieveSection />
          </PageSection>

          <PageSection
            linkTitle="What's on"
            bannerImageUrl="https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
            url="/whats-on"
            bannerMobilePosition="center">
            <WhatsOnSection />
          </PageSection>

        </PageSidebar>
      </Page>
    )
  }

}

export default AboutPageTemplate;
