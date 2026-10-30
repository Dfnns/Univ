<?php

namespace App\Http\Controllers;

use App\Models\BeritaTrpl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BeritaTrplController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $berita_trpl = BeritaTrpl::orderBy('created_at', 'desc')->get();
        return response()->json($berita_trpl);
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
            $path = $request->file('gambar')->store('berita_trpl', 'public');
            $validated['gambar'] = $path;
        }

        $berita_trpl = BeritaTrpl::create($validated);
        return response()->json($berita_trpl, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $berita_trpl = BeritaTrpl::findOrFail($id);
        return response()->json($berita_trpl);
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
            if ($berita_trpl->gambar) {
                Storage::disk('public')->delete($berita_trpl->gambar);
            }
            $path = $request->file('gambar')->store('berita_trpl', 'public');
            $validated['gambar'] = $path;
    }

    $berita_utama->update($validated);
        return response()->json($berita_trpl);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $berita_trpl = BeritaTrpl::findOrFail($id);
        if ($berita_trpl->gambar) {
            Storage::disk('public')->delete($berita_trpl->gambar);
        }
        $berita_trpl->delete();
        return response()->json(['message' => 'Berita TRPL dihapus']);
    }

}

