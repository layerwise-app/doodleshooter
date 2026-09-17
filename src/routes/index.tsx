import { createFileRoute } from '@tanstack/react-router';
import { seo } from '~/utils/seo';

const homePageTitle = '涂鸦街区';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      ...seo({
        title: homePageTitle,
        description: '一款涂鸦风第一人称生存射击游戏，复刻自 doodleshooter'
      })
    ]
  }),
  component: Home
});

function Home() {
  return (
    <div className='h-[100dvh] w-full overflow-hidden bg-background'>
      <iframe
        src='/doodle-district/'
        title='涂鸦街区'
        className='h-full w-full border-0'
        allow='autoplay; fullscreen; gamepad'
      />
    </div>
  );
}
