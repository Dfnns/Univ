<?php

namespace App\Http\Controllers;

use App\Models\BeritaUtama;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BeritaUtamaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $berita_utama = BeritaUtama::orderBy('created_at', 'desc')->get();
        return response()->json($berita_utama);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'tanggal' => 'required|date',
            'judul' => 'required|string|max:255',
            'gambar' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('berita_utama', 'public');
            $validated['gambar'] = $path;
        }

        $berita_utama = BeritaUtama::create($validated);
        return response()->json($berita_utama, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $berita_utama = BeritaUtama::findOrFail($id);
        return response()->json($berita_utama);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'tanggal' => 'sometimes|required|date',
            'judul' => 'sometimes|required|string|max:255',
            'gambar' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            if ($berita_utama->gambar) {
                Storage::disk('public')->delete($berita_utama->gambar);
            }
            $path = $request->file('gambar')->store('berita_utama', 'public');
            $validated['gambar'] = $path;
    }

    $berita_utama->update($validated);
        return response()->json($berita_utama);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $berita_utama = BeritaUtama::findOrFail($id);
        if ($berita_utama->gambar) {
            Storage::disk('public')->delete($berita_utama->gambar);
        }
        $berita_utama->delete();
        return response()->json(['message' => 'Berita utama dihapus']);
    }

}

