import { getAnalyticsSummary } from '@/app/actions/analytics';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Printer, Share2, MousePointerClick } from 'lucide-react';

export const dynamic = 'force-dynamic'; // Ensure fresh data on every load

export default async function AnalyticsPage() {
    const stats = await getAnalyticsSummary();

    // Helper to get count safely
    const getCount = (key: string) => stats[key] || 0;

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />
            <main className="flex-1 container mx-auto py-12 px-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                        <BarChart className="h-8 w-8 text-primary" />
                        Engagement Report
                    </h1>
                    <p className="text-muted-foreground">
                        Real-time metrics for the Dec 1 Report.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Zine Prints */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Zines Generated</CardTitle>
                            <Printer className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getCount('zine_print')}</div>
                            <p className="text-xs text-muted-foreground">Total print dialogs opened</p>
                        </CardContent>
                    </Card>

                    {/* Shares */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Shares</CardTitle>
                            <Share2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {getCount('share_facebook') + getCount('share_twitter') + getCount('share_copy_link')}
                            </div>
                            <p className="text-xs text-muted-foreground">Across all platforms</p>
                        </CardContent>
                    </Card>

                    {/* Map Interactions (Placeholder for future) */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Map Interactions</CardTitle>
                            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getCount('map_marker_click')}</div>
                            <p className="text-xs text-muted-foreground">Artist markers clicked</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Raw Data Table */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold mb-4">Raw Data Logs</h2>
                    <div className="border rounded-lg overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground uppercase">
                                <tr>
                                    <th className="px-6 py-3">Event Name</th>
                                    <th className="px-6 py-3">Count</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {Object.entries(stats).map(([key, value]) => (
                                    <tr key={key} className="bg-background">
                                        <td className="px-6 py-4 font-medium">{key}</td>
                                        <td className="px-6 py-4">{value}</td>
                                    </tr>
                                ))}
                                {Object.keys(stats).length === 0 && (
                                    <tr>
                                        <td colSpan={2} className="px-6 py-8 text-center text-muted-foreground">
                                            No data recorded yet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}