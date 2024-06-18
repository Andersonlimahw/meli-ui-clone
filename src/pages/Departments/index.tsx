import { ArrowLineLeft } from '@phosphor-icons/react';


import { useHookSample } from './hooks';
import { EScreenState } from '../../enums';

import { stateKey } from '../../commons/utils/renders/screent-type';
import { Card, ErrorApiComponent, Footer, HeadingLarge, HeadingMedium, HeadingSmall, LoadingComponent, NoContentComponent, ThemeSwitcher } from '../../commons/components';
import { CategoryModel, DepartmentModel } from '../../models/meli';
import { CardTitle } from '../../commons/components/Organisms/Card/Title';

export const Departments = () => {

  const useHook = useHookSample();
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
  const SuccesComponent = () => (
    <>
      <div className='mt-10 w-full'>
        <HeadingMedium> 
          Categorias
        </HeadingMedium>
      </div>      
      {data?.departments &&
        data?.departments.map((department: DepartmentModel) => (
          <div className='flex flex-grow flex-wrap w-full items-center justify-between gap-4 m-auto max-w-screen-xl mt-2 mb-10'>
            <div className="block text-center w-full py-4">
              <HeadingLarge>
                {department.name}
              </HeadingLarge>
            </div>
           
            <div className='flex flex-grow flex-wrap w-full justify-between gap-4 m-auto max-w-screen-xl mt-10'>
              {
                department.categories.map((category: CategoryModel, index: number) => (
                  <div 
                    className='flex'
                    key={category.id}
                  >
                    <Card
                      key={category.id}
                      imageUrl={`https://picsum.photos/id/${index}/600/320`}
                      title={category.name}
                      description={`${category.name} ${category.children_categories?.length ?? 0}`}
                      linkUrl={category.permalink}
                      linkLabel={'ver mais'}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </>);


  const screenState: any = {
    [EScreenState.loading]: { render: () => 
      (
        <div className='flex flex-grow flex-wrap w-full justify-between gap-4 m-auto max-w-screen-xl py-6  px-4'>
          {
            Array(12).fill(0).map((item, index) => (<LoadingComponent key={index + item} /> ))
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
      <div className={`w-full h-40 bg-gradient-to-r py-10 ${theme.styles.gradient}`} >
        <ThemeSwitcher />
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
      {/* <Footer /> */}
    </>
  );
};

export default Departments;

