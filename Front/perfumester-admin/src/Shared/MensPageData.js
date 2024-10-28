import HeadingImage from '../Assets/Men/heading.png'
import SpecialPerfume1 from '../Assets/Men/image.png'
import SpecialPerfume2 from '../Assets/Men/image2.png'
import SpecialBackground from '../Assets/Men/background.png'

export const mensPageData = [
    {
      section: 'homeSection',
      content: {
        images:[HeadingImage],
      },
    },
    {
      section: 'recommendedPerfumes',
      content: {
        images:[SpecialPerfume1,SpecialPerfume2]
      },
    },
    {
      section: 'specialPerfumes',
      content: {
        images:[SpecialPerfume1,SpecialPerfume2,SpecialPerfume1]
      },
    },
    {
      section: 'specialBackgrounds',
      content: {
        images:[SpecialBackground]
      },
    },
];
  