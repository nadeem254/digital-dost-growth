import { Skeleton } from "@/components/ui/skeleton";

// Card skeleton for service/industry cards
export const CardSkeleton = () => (
  <div className="p-6 rounded-xl border border-border bg-card space-y-4">
    <Skeleton className="h-12 w-12 rounded-lg" />
    <Skeleton className="h-6 w-3/4" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
    <Skeleton className="h-10 w-32 rounded-md" />
  </div>
);

// Blog/Article card skeleton
export const ArticleSkeleton = () => (
  <div className="rounded-xl border border-border bg-card overflow-hidden">
    <Skeleton className="h-48 w-full rounded-none" />
    <div className="p-5 space-y-3">
      <Skeleton className="h-4 w-20 rounded-full" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-4/5" />
      <div className="space-y-2 pt-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex items-center gap-3 pt-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  </div>
);

// Testimonial skeleton
export const TestimonialSkeleton = () => (
  <div className="p-6 rounded-xl border border-border bg-card space-y-4">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-5 w-5 rounded" />
      ))}
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
    <div className="flex items-center gap-3 pt-2">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  </div>
);

// Hero section skeleton
export const HeroSkeleton = () => (
  <div className="min-h-[70vh] flex items-center">
    <div className="container-custom w-full">
      <div className="max-w-3xl space-y-6">
        <Skeleton className="h-6 w-40 rounded-full" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-4/5" />
        <div className="space-y-2 pt-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
        <div className="flex gap-4 pt-4">
          <Skeleton className="h-12 w-40 rounded-md" />
          <Skeleton className="h-12 w-36 rounded-md" />
        </div>
      </div>
    </div>
  </div>
);

// Grid of card skeletons
export const CardGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(count)].map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

// Section with title skeleton
export const SectionSkeleton = ({ cardCount = 3 }: { cardCount?: number }) => (
  <div className="py-16 space-y-10">
    <div className="text-center space-y-4">
      <Skeleton className="h-5 w-32 mx-auto rounded-full" />
      <Skeleton className="h-10 w-80 mx-auto" />
      <Skeleton className="h-5 w-96 mx-auto" />
    </div>
    <CardGridSkeleton count={cardCount} />
  </div>
);

// Profile/Team member skeleton
export const ProfileSkeleton = () => (
  <div className="flex flex-col items-center text-center space-y-4">
    <Skeleton className="h-24 w-24 rounded-full" />
    <Skeleton className="h-6 w-32" />
    <Skeleton className="h-4 w-24" />
    <div className="flex gap-2">
      <Skeleton className="h-8 w-8 rounded-full" />
      <Skeleton className="h-8 w-8 rounded-full" />
      <Skeleton className="h-8 w-8 rounded-full" />
    </div>
  </div>
);

// Text content skeleton
export const TextBlockSkeleton = ({ lines = 4 }: { lines?: number }) => (
  <div className="space-y-3">
    {[...Array(lines)].map((_, i) => (
      <Skeleton 
        key={i} 
        className="h-4" 
        style={{ width: `${100 - (i % 3) * 15}%` }} 
      />
    ))}
  </div>
);
