
import { useLandings } from './hooks';
import { EScreenState } from '../../enums';

import { stateKey } from '../../commons/utils/renders/screent-type';
import { Card, ErrorApiComponent, Footer, HeadingLarge, HeadingMedium, HeadingSmall, LoadingComponent, Menu, NoContentComponent, ThemeSwitcher } from '../../commons/components';
import { CategoryModel, DepartmentModel, Landing } from '../../models/meli';
import { useMemo } from 'react';

export const Landings = () => {

  const useHook = useLandings();
  const { departmentsQuery, theme } = useHook;
  const {
    data,
    refetch,
  } = departmentsQuery;

  const hasSelectedContact = false;
  const containerClasses = {
    'mobile': 'min-[0px]:block',
    'default': 'min-[690px]:flex flex'
  };

  const messagesContainerClasses = {
    'mobile': !hasSelectedContact ? 'none' : 'min-[0px]:w-full',
    'default': 'max=[600px]:flex-1 w-full'
  };

  const isMobile = () => {
    return window.screen.width <= 690;
  }

  const screnType = isMobile() ? 'mobile' : 'default';

  const moreCategories = useMemo(() => {
    if (!data) return [];
    return [
      data?.more_categories,
      ...data?.high_priority,      
    ]
  }, [data]);

  const SuccesComponent = () => (
    <>
      <Menu />
      <div className='mt-10 w-full'>
        <HeadingMedium>
          Landings+
        </HeadingMedium>
      </div>
      <div className='flex flex-row flex-grow flex-no-wrap w-full justify-between gap-4 mx-auto my-10 pb-10 max-w-screen-xl overflow-x-scroll'>
        {data?.landings &&
          data?.landings.map((landing: Landing, index: number) => (
            <div className="flex">
              <Card
                key={landing.permalink}
                title={landing.label}
                description={''}
                linkUrl={landing.permalink}
                linkLabel={'ver mais'}
              />
            </div>
          ))
        }
      </div>

      <div className='mt-10 w-full'>
        <HeadingMedium>
          Mais categorias+
        </HeadingMedium>
      </div>

      <div className='flex flex-row flex-grow flex-no-wrap w-full justify-start gap-4 mx-auto my-10 pb-10 max-w-screen-xl overflow-x-auto'>
        {moreCategories &&
         moreCategories.map((landing: any, index: number) => (
            <div className="flex">
              <Card
                key={landing.permalink}
                title={landing.label}
                description={''}
                linkUrl={landing.permalink}
                linkLabel={'ver mais'}
              />
            </div>
          ))
        }
      </div>

    </>
  );


  const screenState: any = {
    [EScreenState.loading]: {
      render: () =>
      (
        <div className='flex flex-grow flex-wrap w-full justify-between gap-4 m-auto max-w-screen-xl py-6  px-4'>
          {
            Array(12).fill(0).map((item, index) => (<LoadingComponent key={index + item} />))
          }
        </div>
      )

    },
    [EScreenState.error]: { render: () => <ErrorApiComponent onRetry={refetch} /> },
    [EScreenState.noCotent]: { render: () => <NoContentComponent /> },
    [EScreenState.success]: { render: () => <SuccesComponent /> },
  };
  return (
    <>
      <div className={`w-full h-40 bg-gradient-to-r py-10 ${theme.styles.gradient}`}>
      </div>

      <div className="container mx-auto mt-[-128px] rounded-sm">
        <div className="py-4 h-full">
          <div className={`flex shadow-lg rounded px-4 h-full ${containerClasses[screnType]}`}>
            {/* Right */}
            <div className={`animate-[wiggle_1s_ease-in-out_infinite] shadow-sm flex flex-col ${messagesContainerClasses[screnType]}`}>
              {screenState[`${stateKey(departmentsQuery)}`]?.render() ?? LoadingComponent()}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-12'></div>
      <Footer />
    </>
  );
};

export default Landings;

