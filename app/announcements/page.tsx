import { Container } from "../../components/Ui";
import AnnouncementCard, { Announcement } from "../../components/AnnouncementCard";

const MOCK: Announcement[] = []; // pull from Sanity later

export default function AnnouncementsPage() {
  return (
    <Container className="py-10">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">All Announcements</h1>
      {MOCK.length === 0 ? (
        <p className="text-slate-600">No announcements yet.</p>
      ) : (
        <div className="space-y-4">
          {MOCK.map(a => <AnnouncementCard key={a.id} a={a} />)}
        </div>
      )}
    </Container>
  );
}
