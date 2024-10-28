import HeadingImage from '../Assets/Women/heading.png'
import SpecialPerfume1 from '../Assets/Women/image.png'
import SpecialPerfume2 from '../Assets/Women/image2.png'
import SpecialBackground from '../Assets/Women/background.png'

export const womenPageData = [
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
  