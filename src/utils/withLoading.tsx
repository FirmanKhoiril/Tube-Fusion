import React, { lazy, Suspense, ReactElement } from 'react'
import { Triangle } from 'react-loader-spinner'

type LazyLoadedComponentType = React.ComponentType<unknown>

const withLazyLoading = (
    importComponent: () => Promise<{ default: LazyLoadedComponentType }>
  ): React.FC => {
    const LazyComponent = lazy(importComponent)

    return function WithLazyLoading(props): ReactElement {
      return (
        <Suspense fallback={
            <div className='flex justify-center w-full items-center h-screen'>
                <Triangle
            visible={true}
            height={100}
            width={100}
            color="#10b981"
            ariaLabel="triangle-loading"
          />
            </div>
        }>
          <LazyComponent {...props} />
        </Suspense>
      )
    }
  }
  
  export default withLazyLoading