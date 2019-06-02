import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import WelcomeSection from './WelcomeSection';
import HistorySection from './HistorySection';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import WhatsOnSection from './WhatsOnSection';
import FAQSection from './FAQSection';
import './AboutPage.scss'



interface IAboutPageProps {

}

interface IAboutPageState {
  title?: string;
  currentBannerImage?: string;
  bannerMobilePosition?: string;
  currentSection?: number;
}


class AboutPage extends React.Component<IAboutPageProps, IAboutPageState> {

  constructor(props) {
    super(props);
    this.state = {}
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
        <PageSidebar onSectionChange={this.handleSectionChange} currentSection={this.state.currentSection}>

          <PageSection
            linkTitle="About Us"
            bannerImageUrl="https://images.unsplash.com/photo-1521915062729-2969ce9b7a33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
            url="/about"
            bannerMobilePosition="right">
            <WelcomeSection />
          </PageSection>

          {/* <PageSection
            linkTitle="History"
            bannerTitle="HOW IT ALL BEGAN"
            bannerImageUrl="https://images.unsplash.com/photo-1455723576895-6ab1d5abbcb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
            url="/about/history"
            bannerMobilePosition="right">
            <HistorySection />
          </PageSection> */}

          <PageSection
            linkTitle="What We Believe"
            bannerImageUrl="https://images.unsplash.com/photo-1496338406295-3adc3db91a89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
            url="/about/what-we-believe"
            bannerMobilePosition="center">
            <WhatWeBelieveSection />
          </PageSection>

          <PageSection
            linkTitle="What's On"
            bannerImageUrl="https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
            url="/about/whats-on"
            bannerMobilePosition="center">
            <WhatsOnSection />
          </PageSection>

          {/* <PageSection
            linkTitle="FAQ"
            bannerImageUrl="https://images.unsplash.com/photo-1458419948946-19fb2cc296af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            url="/about/faq"
            bannerMobilePosition="right">
            <FAQSection />
          </PageSection> */}

        </PageSidebar>
      </Page>
    )
  }

}

export default AboutPage;
